export const hasID = (data) => {
  if (data.id) return true;
  return false;
};

export const filterParcels = (parcels, filter) => parcels
  .filter(parcel => parcel.status === filter);
