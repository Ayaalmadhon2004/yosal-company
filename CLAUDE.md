@AGENTS.md

# Git & PR workflow

- **Authorship:** everything pushed to this repo is under the owner's name (`Ayaalmadhon2004 <aya.alaasel123@gmail.com>`) — never Claude's or anyone else's. Before committing, make sure `git config user.name` / `user.email` are set to those values.
- **No attribution:** do NOT add `Co-Authored-By`, `Claude-Session`, "Generated with Claude Code" or any similar line to commit messages, PR titles or PR descriptions.
- **One feature = one branch = one PR.** Branch off the latest `main` (`feature/<short-name>` or `fix/<short-name>`), keep the change scoped to that feature, and open a separate pull request for it.
- **Keep it organized:** small descriptive commits (conventional style: `feat:`, `fix:`, `chore:`, `docs:`), and a PR description that says what changed, why, and how it was checked.
- **Check before opening a PR:** `npm run lint` and `npm run build` must pass.
- Wait for the owner's review/approval; never merge a PR yourself.
