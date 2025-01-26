/// <reference types='cypress-xpath' />

import { ElementHelper } from './element-helper';
import { VerificationHelper } from './verification-helper';

export class TableHelper {
    /**
     * To click a cell in a table
     */
    static clickCellInTableByValue(cellValue, isForce = false, tableAttribute = 'role', tableAttributeValue = 'table') {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //td[contains(text(),"${cellValue}")]`;
        ElementHelper.click(element, isForce);
    }

    /**
     * To click a cell in a table for a particular column, based on reference column header and other row values
     */
    static clickCellByColumnHeaderAndRowReference(columnHeaderValue, rowCellReference, isForce = false, tableAttribute = 'role', tableAttributeValue = 'table') {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //tr[.//*[contains(text(), "${rowCellReference}")]]
                        //td[count(//th[text()="${columnHeaderValue}"]/preceding-sibling::th)+1]`;
        ElementHelper.click(element, isForce);
    }

    static clickCellByColumnHeaderAndRowReferenceInBold(columnHeaderValue, rowCellReference, isForce = false, tableAttribute = 'role', tableAttributeValue = 'table') {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //tr[.//*[contains(text(), "${rowCellReference}")]]
                        //td[count(//th[contains(.,"${columnHeaderValue}")]
                        /preceding-sibling::th)+1]//strong`;
        ElementHelper.click(element, isForce);
    }

    /**
     * Verify if a cell contains expected value
     */
    static verifyCellValueByColumnHeaderAndRowReference(columnHeaderValue, rowCellReference, expectedValue, isMatch = true, tableAttribute = 'role', tableAttributeValue = 'table') {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                        //tr[.//*[contains(text(), "${rowCellReference}")]]
                        //td[count(//th[text()="${columnHeaderValue}"]/preceding-sibling::th)+1]`;
        VerificationHelper.matchValue(element, expectedValue, isMatch);
    }

    static verifyDataTableByHeaderAndValueInBold(columnHeaderValue, rowCellReference, expectedValue, tableAttribute = 'role', tableAttributeValue = 'table') {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                            //tr[.//*[contains(text(), "${rowCellReference}")]]
                            //td[count(//th[contains(.,"${columnHeaderValue}")]/preceding-sibling::th)+1]//strong`;
        VerificationHelper.containValue(element, expectedValue);
    }

    static verifyDataTableByHeaderAndValue(columnHeaderValue, rowCellReference, expectedValue, tableAttribute = 'role', tableAttributeValue = 'table') {
        const element = `//table[contains(@${tableAttribute},"${tableAttributeValue}")]
                                //tr[.//*[contains(text(), "${rowCellReference}")]]
                                //td[count(//th[contains(.,"${columnHeaderValue}")]/preceding-sibling::th)+1]`;
        VerificationHelper.containValue(element, expectedValue);
    }
}
