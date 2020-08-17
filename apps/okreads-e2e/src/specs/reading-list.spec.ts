import { $, $$, browser, ExpectedConditions, element, By } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should be able to undo the added book', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const readMeClcik=await element(By.id('btn_want_to_read4'));
    await readMeClcik.click();

    const undoClick = await element.all($('[class="mat-focus-indicator mat-button mat-button-base"]')).last();
    await undoClick.click();

    await browser.wait(
      ExpectedConditions.elementToBeClickable(element(By.id('btn_want_to_read4')))
    );

  });
});
