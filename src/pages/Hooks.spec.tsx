import React from 'react';
import { describe, test, expect, it } from 'vitest'
import Hooks from "./Hooks";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<Hooks />', () => {

    let txtName: HTMLElement;
    let btnSubmit: HTMLElement;

    beforeEach(async () => {
        const body = render(<Hooks />);
        expect(body).toBeTruthy();
        txtName = await body.findByTestId('txtName');
        btnSubmit = await body.findByTestId('btnSubmit');
    });

    test('Page renders properly', async () => {
        expect(txtName).toBeInTheDocument();
        expect(btnSubmit).toBeInTheDocument();        
    });

    it('Text rendered properly',()=>{

//        This page demonstrates useState
    });

    it('Should allow enter name', async () => {
        fireEvent.change(txtName, { target: { value: 'test' } });
        expect((txtName! as HTMLInputElement).value).toBe('test');
    });
});
