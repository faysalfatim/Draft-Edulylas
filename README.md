# Draft-Edulylas

## Demo Instructions
- Save `index.html` and open it directly in a modern browser (Chrome or Edge works best). All demo data lives in `localStorage`, so there is no server dependency.
- For iframe-based embeds (YouTube, Medium, Dev.to) run `npx serve .` from the project root to enable secure embed previews.
- The default auto-login user is **dev@edulylas.test**. Click the circular "EL" avatar in the header to switch to **creator@edulylas.test** and preview creator-only controls.
- Payments and receipts are simulated entirely on the client. Unlocking content stores purchases in `edulylas_purchases` and unlocks in `edulylas_unlocks`. Use the debug panel (bottom-right) to reseed demo data or simulate webhook failures.
- Multi-view navigation (Home, Search, Create, Account) is handled on the client. If sections ever look empty after heavy editing, click **Debug → Force re-seed demo data** to restore the sample catalog.
