# Publishing Guide for utc-to-ist

This guide will help you publish your npm package.

## Prerequisites

1. **Create an npm account** (if you don't have one):
   - Go to https://www.npmjs.com/signup
   - Create an account

2. **Login to npm** from your terminal:
   ```bash
   npm login
   ```
   Enter your username, password, and email when prompted.

## Before Publishing

### 1. Update Repository URL

Edit `package.json` and replace `yourusername` with your actual GitHub username:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOURUSERNAME/utc-to-ist.git"
},
"bugs": {
  "url": "https://github.com/YOURUSERNAME/utc-to-ist/issues"
},
"homepage": "https://github.com/YOURUSERNAME/utc-to-ist#readme"
```

### 2. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 3. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `utc-to-ist`
3. Push your code:

```bash
git remote add origin https://github.com/YOURUSERNAME/utc-to-ist.git
git branch -M main
git push -u origin main
```

### 4. Test Your Package Locally

```bash
npm test
```

### 5. Check What Will Be Published

```bash
npm pack --dry-run
```

This shows you exactly what files will be included in your package.

## Publishing Steps

### First Time Publishing

```bash
# Make sure you're in the package directory
cd d:\SAIIII\git\utc-to-ist

# Publish to npm
npm publish
```

### Publishing Updates

When you make changes and want to publish a new version:

1. **Update the version** in `package.json`:
   - Patch (bug fixes): `1.0.0` → `1.0.1`
   - Minor (new features): `1.0.0` → `1.1.0`
   - Major (breaking changes): `1.0.0` → `2.0.0`

   Or use npm version command:

   ```bash
   npm version patch  # for 1.0.0 -> 1.0.1
   npm version minor  # for 1.0.0 -> 1.1.0
   npm version major  # for 1.0.0 -> 2.0.0
   ```

2. **Commit and push changes**:

   ```bash
   git add .
   git commit -m "Version bump and changes"
   git push
   ```

3. **Publish**:
   ```bash
   npm publish
   ```

## After Publishing

### Verify Your Package

1. Check on npm: https://www.npmjs.com/package/utc-to-ist
2. Test installation:
   ```bash
   npm install utc-to-ist
   ```

### Add npm Badge to README

The README already includes npm badges that will automatically show your package version once published.

## Package Name Availability

**Important**: The package name `utc-to-ist` might already be taken on npm. If you get an error during publishing:

1. Check availability: https://www.npmjs.com/package/utc-to-ist
2. If taken, choose a different name like:
   - `@yourusername/utc-to-ist` (scoped package)
   - `utc-ist-converter`
   - `utc-to-ist-time`
   - `ist-timezone-converter`

To use a scoped package, update `package.json`:

```json
"name": "@yourusername/utc-to-ist"
```

Then publish with:

```bash
npm publish --access public
```

## Common Issues

### "You do not have permission to publish"

- The package name is already taken
- Use a different name or scoped package

### "You must be logged in"

- Run `npm login` first

### "Package name too similar to existing package"

- Choose a more unique name

## Unpublishing (if needed)

**Warning**: Only unpublish within 72 hours of publishing, and only if absolutely necessary.

```bash
npm unpublish utc-to-ist@1.0.0  # specific version
npm unpublish utc-to-ist --force  # entire package (not recommended)
```

## Best Practices

1. ✅ Always test before publishing
2. ✅ Use semantic versioning
3. ✅ Keep README updated
4. ✅ Add a CHANGELOG.md for version history
5. ✅ Respond to issues and PRs
6. ✅ Keep dependencies minimal (you have zero - great!)

## Next Steps

After publishing, consider:

- Adding CI/CD with GitHub Actions
- Adding more comprehensive tests
- Creating examples folder
- Adding TypeScript source files
- Setting up automated testing

---

**Ready to publish?** Follow the steps above and your package will be live on npm! 🚀
