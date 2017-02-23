import { createSelector } from 'reselect';

const refillInputSelector = (state) =>  ( state.vehicleData.selectedVehicle)? state.vehicleData.selectedVehicle.refills : [];

export const fuelConsumptionSelector = createSelector(
    // input selectors here.. 
    [ refillInputSelector ],
    (refills) => {
        return 10.2;
    }
)