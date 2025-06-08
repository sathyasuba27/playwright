import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dgoogle%26oq%3Dgoogle%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDM0NTVqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DJdxDaIbiI5Dx4-EPkM_oqAg&q=EgSYO9vBGKa4j8IGIjCmwU6B5CNmsMcI6mrAUR1-iZbaUBTD3eCekraqipZc7aQsZ5WKAd9FdJ2LyIESm6YyAVJaAUM');
});