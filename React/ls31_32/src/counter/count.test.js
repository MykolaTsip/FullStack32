import { render, screen, fireEvent } from '@testing-library/react';

// import { userEvent } from '@testing-library/user-event';

import Count from './count';

describe('Test count component', () => {

    beforeEach(() => {
        render(<Count/>);

    })

    test('Check default state', () => {

        // const def = ' 0 ';

        // let defState = screen.getByText('0').innerHTML;
        const defState = screen.getByText('0');

        
        // expect(defState).toEqual(def);
        expect(defState).toBeInTheDocument();
    });

    test('Check data after click Add ONE', () => {
        // const user = userEvent.setup();
        // render(<Count/>);

        // const AddFunk = screen.getByText('Add ONE');
        const AddFunk = screen.getByTestId('add');

        // await AddFunk.click();
        // await user.click(AddFunk);

        fireEvent.click(AddFunk);

        const defState = screen.getByTestId('count');
        // const defState = screen.getByText('1');

        // console.log(AddFunk);
        expect(defState.innerHTML.trim()).toEqual('1');
        // expect(defState).toBeInTheDocument();

    });

    test('Check data after click Minus ONE', () => {
        // render(<Count/>);

        // const defState = screen.getByTestId('count').innerHTML;
        // console.log(defState);

        const AddFunk = screen.getByTestId('add');
        fireEvent.click(AddFunk);
        fireEvent.click(AddFunk);


        const MinusFunk = screen.getByTestId('minus')

        fireEvent.click(MinusFunk);

        const defState = screen.getByTestId('count');
        expect(defState.innerHTML.trim()).toEqual('1');

    });


    test('Check data after click Minus ONE when 0', () => {
        // render(<Count/>);
        const MinusFunk = screen.getByTestId('minus')

        fireEvent.click(MinusFunk);

        const defState = screen.getByTestId('count');
        expect(defState.innerHTML.trim()).toBe('0');  
    })


})