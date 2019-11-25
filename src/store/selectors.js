import { createSelector } from "reselect";

const rootSelector = state => state;

export const selectRestauranrsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);
