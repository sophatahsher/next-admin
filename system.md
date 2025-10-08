| Method | Repo Type | Where Code Is Pulled | Notes |
|--------|------------|----------------------|-------|
| `docker build https://gitlab.com/...` | Public | Docker daemon | Easiest for open source |
| Auth with token | Private | Docker daemon | Secure with GitLab token |
| Jenkins pulls first | Any | Jenkins workspace | ✅ Best for CI/CD |
