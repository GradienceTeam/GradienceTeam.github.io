# 发布过程

## 发布前

### A week before release
- [ ] Announce the upcoming release by creating a new issue one week before the release.
- [ ] Ask translators to translate new strings.
- [ ] In the issue, prepare release notes :
  - [ ] The first section would be a summary of big changes.
  - [ ] The second section should list new dependencies, including python dependencies, and the reason they were added.
  - [ ] The third section would be the list of contributions.

### 3 days before release
- [ ] Sign off on the release notes (or at least the first section).
- [ ] Update the meson version number.
- [ ] Add the release notes' first section's content to the AppData.
- [ ] Create a new branch for the release with the name being the release number and freeze new feature, only merge in bug fixes and translation updates.
- [ ] Create a flathub test build (by creating a pull request in the flathub repo, bumping the release tag in it, and asking Flathub's buildbot to build it).
- [ ] Ask contributors to test the build. Any identified bug should halt the update until fixed.

## Doing the release
- [ ] Tag the lastest commit in the release branch with the version number.
- [ ] Create a new GitHub release using the approved release notes.

## 发布后
- [ ] Upgrade the flathub package by bumping the release tag.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
