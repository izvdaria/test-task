import { type Page } from '@playwright/test';
import { OverviewTable } from './sections/overview-table';

export class CryptoRankMainPage {
    readonly page: Page;
    readonly overviewTable: OverviewTable;

    constructor(page: Page) {
        this.page = page;
        this.overviewTable = new OverviewTable(this.page);
    }

    async goto() {
        await this.page.goto('https://cryptorank.io/');
    }
}
