import { act, renderHook } from '@testing-library/react-hooks';
import { Chow } from '../../types';
import { ChowState, useChowStore } from '../content.store';

describe('Content Store', () => {
    let chowStore: ReturnType<typeof renderHook<unknown, ChowState>>;

    beforeEach(() => {
        chowStore = renderHook(() => useChowStore());
    });

    it('adds chow to store', () => {
        const chow: Chow = {
            title: "Carrot",
            description: "Carrot description",
            image: "https://example.com/uploads/carrots_f0e8e6217a.jpeg"
        }

        act(() => {
            chowStore.result.current.setChow(chow);
        });

        expect(chowStore.result.current.chow).toEqual({
            title: chow.title,
            description: chow.description,
            image: chow.image
        });

    });
})