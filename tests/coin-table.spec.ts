import { test, expect } from '@playwright/test';
import { CryptoRankMainPage } from '../page-objects/cryptorank-main-page';

test.describe('Overview Table', () => {
  let mainPage: CryptoRankMainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new CryptoRankMainPage(page);
    await mainPage.goto();
  });

  test('Verify Market Cap cell has correct value', async ({ page }) => {
    const marketCapCell = await mainPage.overviewTable.getTableCellForCoinWithTitle('Market Cap', 'Bitcoin');
    await expect(marketCapCell).toHaveText('$ 1.33T');
  });

  test('Verify Price cell has correct value', async ({ page }) => {
    const marketCapCell = await mainPage.overviewTable.getTableCellForCoinWithTitle('Price', 'Tether');
    await expect(marketCapCell).toHaveText('$ 1.00');
  });
})
