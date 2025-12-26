# GitHub Basics for Team Collaboration

## Introduction

To work on the hackathon as a team, you will need to use **GitHub**, a platform where you can store your code and collaborate with others in real-time.

## Prerequisites

Before getting started, make sure you have:
- Git installed locally on your computer (everyone has already confirmed this)
- A GitHub account at [GitHub.com](https://github.com)

### Setting Up Your GitHub Account

If you don't have a GitHub account yet:
1. Go to [GitHub.com](https://github.com)
2. Sign up with your Google account for quick registration
3. Complete the setup process

## Configuring Git Locally

Once you have your GitHub account, you need to configure Git on your local machine. Open your terminal and run the following commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Note:** Replace `"Your Name"` with your actual name and `"your.email@example.com"` with the email you used for GitHub.

## Testing Your Setup: Cloning the ClubHub Repository

Now let's test that everything works by downloading the ClubHub source code from GitHub.

### Step 1: Clone the Repository

In your terminal, type the following command:

```bash
git clone https://github.com/tsurkhang/clubhub.git
```

This will clone (download) the repository and create a folder called `clubhub` on your computer.

### Step 2: Open the Project in VS Code

1. Navigate to the `clubhub` folder
2. Open it in VS Code

### Step 3: Install Dependencies

In the VS Code terminal, run the following command to install all required packages (such as Angular Material):

```bash
npm install
```

**Troubleshooting:** If you encounter `EACCESS` errors, try running:

```bash
sudo npm install
```

**Note:** Using `sudo` requires you to enter your administrator password.

### Step 4: Run the Development Server

If the installation was successful, start the development server with:

```bash
ng serve
```

The project will open in your browser at `http://localhost:4200`

## Making Changes and Updating GitHub

Now that you have the project running locally, here's how to make changes and share them with your team:

### Step 1: Make Your Changes

Edit some code or make a small change to test the workflow.

### Step 2: Commit Your Changes

1. Click on the **Source Control** icon (branch icon) on the left sidebar in VS Code
2. Review your changes
3. Add a commit message describing what you changed
4. Click the **Commit** button

### Step 3: Push Your Changes

Push your committed changes to GitHub so your team can see them:

- **Option 1:** Click the **Sync Changes** button in VS Code
- **Option 2:** Type the following command in your terminal:

```bash
git push
```

## Understanding Local vs. Remote Changes

Here's an important concept to understand:

- **Local** = Changes that exist only on your computer
- **Remote** = Changes that have been pushed to GitHub

### The Git Workflow

1. **Make changes** - Files are modified locally
2. **Commit** - Changes are saved to your local Git history
3. **Push** - Changes are uploaded to GitHub (remote)
4. **Pull** - Download changes from GitHub to your local machine

### Pulling Changes from Your Team

When your collaborators push changes to GitHub, those changes won't automatically appear on your computer. You need to **pull** them:

```bash
git pull
```

**Best Practice:** Always run `git pull` before starting new work to make sure you have the latest version of the code!

---

## Quick Reference

| Command | What It Does |
|---------|--------------|
| `git clone <url>` | Downloads a repository from GitHub |
| `git pull` | Downloads the latest changes from GitHub |
| `git push` | Uploads your committed changes to GitHub |
| `git status` | Shows what files have been changed |
| `npm install` | Installs project dependencies |
| `ng serve` | Starts the Angular development server |

---

**Happy coding!**

