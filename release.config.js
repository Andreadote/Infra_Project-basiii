module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/andreadote/Infra_Project.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
     }