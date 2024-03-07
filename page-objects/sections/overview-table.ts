import { type Locator, type Page } from '@playwright/test';

export class OverviewTable {
    private readonly overviewTable: Locator;
    private readonly overviewTableHeader: Locator;
    private readonly overviewTableBody: Locator;
    private readonly overviewTableHeaderCells: Locator;
    private readonly overviewTableRows: Locator;

    constructor(page: Page) {
        this.overviewTable = page.getByRole('table');
        this.overviewTableHeader = this.overviewTable.locator('thead');
        this.overviewTableBody = this.overviewTable.locator('tbody');
        this.overviewTableHeaderCells = this.overviewTableHeader.locator('th');
        this.overviewTableRows = this.overviewTableBody.getByRole('row');
    }

    private async getColumnIndexByTitle(columnTitle: string): Promise<number> {
        const columnNames = await this.overviewTableHeaderCells.allInnerTexts();
        return columnNames.findIndex(name => name === columnTitle);
    }

    private async getTableRowByCoinTitle(coinTitle: string): Promise<Locator> {
        return this.overviewTableRows.filter({ hasText: coinTitle });
    }

    async getTableCellForCoinWithTitle(tableColumnTitle: string, coinTitle: string): Promise<Locator> {
        const columnIndex = await this.getColumnIndexByTitle(tableColumnTitle);
        const row = await this.getTableRowByCoinTitle(coinTitle);
        const rowCells = row.locator('td');
        return rowCells.nth(columnIndex);
    }
}
