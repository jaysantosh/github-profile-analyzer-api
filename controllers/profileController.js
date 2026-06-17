const axios = require('axios');
const db = require('../db/connection');

exports.analyzeProfile = async (req, res) => {
    const { username } = req.params;

    try {
        // 1. Fetch user data
        const userRes = await axios.get(`https://api.github.com/users/${username}`);
        const user = userRes.data;

        // 2. Fetch repos
        const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = repoRes.data;

        // 3. Analyze data
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        const languageCount = {};
        repos.forEach(repo => {
            if (repo.language) {
                languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
            }
        });

        const mostUsedLanguage = Object.keys(languageCount).reduce((a, b) =>
            languageCount[a] > languageCount[b] ? a : b, null
        );

        // 4. Insert or update


        const query = `
      INSERT INTO profiles
      (username, name, bio, public_repos, followers, following, total_stars, most_used_language, profile_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        bio = VALUES(bio),
        public_repos = VALUES(public_repos),
        followers = VALUES(followers),
        following = VALUES(following),
        total_stars = VALUES(total_stars),
        most_used_language = VALUES(most_used_language),
        profile_url = VALUES(profile_url)
    `;

        const values = [
            user.login,
            user.name,
            user.bio,
            user.public_repos,
            user.followers,
            user.following,
            totalStars,
            mostUsedLanguage,
            user.html_url
        ];

        db.execute(query, values, (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "✅ Profile analyzed successfully",
                username: user.login
            });

        });


    } catch (err) {
        res.status(500).json({ error: "Failed to fetch GitHub data" });
    }
};

// Get all profiles
exports.getAllProfiles = (req, res) => {
    db.execute("SELECT * FROM profiles", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Get single profile
exports.getProfileByUsername = (req, res) => {
    const { username } = req.params;

    db.execute(
        "SELECT * FROM profiles WHERE username = ?",
        [username],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results[0]);
        }
    );
};
