# Cruise

Types:

- <code><a href="./src/resources/cruise/cruise.ts">CruiseCreateResponse</a></code>
- <code><a href="./src/resources/cruise/cruise.ts">CruiseGetFacetsResponse</a></code>

Methods:

- <code title="post /v2/cruise">client.cruise.<a href="./src/resources/cruise/cruise.ts">create</a>({ ...params }) -> CruiseCreateResponse</code>
- <code title="post /v2/cruise/Facets">client.cruise.<a href="./src/resources/cruise/cruise.ts">getFacets</a>({ ...params }) -> CruiseGetFacetsResponse</code>

## Itinerary

Types:

- <code><a href="./src/resources/cruise/itinerary.ts">ItineraryRetrieveResponse</a></code>

Methods:

- <code title="get /v2/cruise/Itinerary/336475">client.cruise.itinerary.<a href="./src/resources/cruise/itinerary.ts">retrieve</a>({ ...params }) -> ItineraryRetrieveResponse</code>

## Ship

### Categories

Types:

- <code><a href="./src/resources/cruise/ship/categories/categories.ts">CategoryRetrieveResponse</a></code>

Methods:

- <code title="get /v2/cruise/ship/categories/14393">client.cruise.ship.categories.<a href="./src/resources/cruise/ship/categories/categories.ts">retrieve</a>({ ...params }) -> CategoryRetrieveResponse</code>

#### Richmedia

Types:

- <code><a href="./src/resources/cruise/ship/categories/richmedia.ts">RichmediaRetrieveResponse</a></code>

Methods:

- <code title="get /v2/cruise/ship/categories/richmedia/14393">client.cruise.ship.categories.richmedia.<a href="./src/resources/cruise/ship/categories/richmedia.ts">retrieve</a>({ ...params }) -> RichmediaRetrieveResponse</code>

# Reservation

Types:

- <code><a href="./src/resources/reservation/reservation.ts">ReservationApplyPaymentResponse</a></code>
- <code><a href="./src/resources/reservation/reservation.ts">ReservationCancelReservationResponse</a></code>
- <code><a href="./src/resources/reservation/reservation.ts">ReservationConfirmReservationResponse</a></code>
- <code><a href="./src/resources/reservation/reservation.ts">ReservationReadFromSupplierResponse</a></code>
- <code><a href="./src/resources/reservation/reservation.ts">ReservationReadReservationResponse</a></code>
- <code><a href="./src/resources/reservation/reservation.ts">ReservationReleaseReservationResponse</a></code>

Methods:

- <code title="post /v2/reservation/pay">client.reservation.<a href="./src/resources/reservation/reservation.ts">applyPayment</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cancel">client.reservation.<a href="./src/resources/reservation/reservation.ts">cancelReservation</a>({ ...params }) -> ReservationCancelReservationResponse</code>
- <code title="post /v2/reservation/confirm">client.reservation.<a href="./src/resources/reservation/reservation.ts">confirmReservation</a>({ ...params }) -> ReservationConfirmReservationResponse</code>
- <code title="post /v2/reservation/readfromsupplier">client.reservation.<a href="./src/resources/reservation/reservation.ts">readFromSupplier</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/read">client.reservation.<a href="./src/resources/reservation/reservation.ts">readReservation</a>({ ...params }) -> ReservationReadReservationResponse</code>
- <code title="post /v2/reservation/release">client.reservation.<a href="./src/resources/reservation/reservation.ts">releaseReservation</a>({ ...params }) -> ReservationReleaseReservationResponse</code>

## Cruise

Types:

- <code><a href="./src/resources/reservation/cruise.ts">CruiseCreateReservationResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseExtendHoldResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseGetCabinDetailsResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseGetFareCodeDetailsResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseGetHistoryResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseGetHistoryFromSupplierResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseGetItineraryFromSupplierResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseGetPastPassengerDetailsResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseHoldCabinResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListAddonsResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListAirGatewaysResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListCabinsResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListCategoriesResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListDiningsResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListFareCodesResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListPackagesResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListPosResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListPricesResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListSpecialServicesResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseListTransfersResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseModifyReservationResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseReadFromSupplierResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseRecordPaymentResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseReleaseCabinResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseSearchPackageWithSupplierResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseSearchReservationResponse</a></code>
- <code><a href="./src/resources/reservation/cruise.ts">CruiseSearchWithSupplierResponse</a></code>

Methods:

- <code title="post /v2/reservation/cruise/create">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">createReservation</a>({ ...params }) -> CruiseCreateReservationResponse</code>
- <code title="post /v2/reservation/cruise/ExtendHold">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">extendHold</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cruise/getcabindetails">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">getCabinDetails</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cruise/GetFareCodeDetails">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">getFareCodeDetails</a>({ ...params }) -> CruiseGetFareCodeDetailsResponse</code>
- <code title="post /v2/reservation/cruise/History">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">getHistory</a>({ ...params }) -> CruiseGetHistoryResponse</code>
- <code title="post /v2/reservation/cruise/HistoryFromSupplier">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">getHistoryFromSupplier</a>({ ...params }) -> CruiseGetHistoryFromSupplierResponse</code>
- <code title="post /v2/reservation/cruise/getitineraryfromsupplier">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">getItineraryFromSupplier</a>({ ...params }) -> CruiseGetItineraryFromSupplierResponse</code>
- <code title="post /v2/reservation/cruise/GetPastPaxDetails">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">getPastPassengerDetails</a>({ ...params }) -> CruiseGetPastPassengerDetailsResponse</code>
- <code title="post /v2/reservation/cruise/holdcabin">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">holdCabin</a>({ ...params }) -> CruiseHoldCabinResponse</code>
- <code title="post /v2/reservation/cruise/listaddons">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listAddons</a>({ ...params }) -> CruiseListAddonsResponse</code>
- <code title="post /v2/reservation/cruise/ListAirGateways">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listAirGateways</a>({ ...params }) -> CruiseListAirGatewaysResponse</code>
- <code title="post /v2/reservation/cruise/listcabins">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listCabins</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cruise/listcategories">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listCategories</a>({ ...params }) -> CruiseListCategoriesResponse</code>
- <code title="post /v2/reservation/cruise/ListDinings">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listDinings</a>({ ...params }) -> CruiseListDiningsResponse</code>
- <code title="post /v2/reservation/cruise/listfarecodes">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listFareCodes</a>({ ...params }) -> CruiseListFareCodesResponse</code>
- <code title="post /v2/reservation/cruise/listPackages">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listPackages</a>({ ...params }) -> CruiseListPackagesResponse</code>
- <code title="post /v2/reservation/cruise/listpos">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listPos</a>({ ...params }) -> CruiseListPosResponse</code>
- <code title="post /v2/reservation/cruise/listprices">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listPrices</a>({ ...params }) -> CruiseListPricesResponse</code>
- <code title="post /v2/reservation/cruise/listSpecialservices">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listSpecialServices</a>({ ...params }) -> CruiseListSpecialServicesResponse</code>
- <code title="post /v2/reservation/cruise/listTransfers">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">listTransfers</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cruise/modify">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">modifyReservation</a>({ ...params }) -> CruiseModifyReservationResponse</code>
- <code title="post /v2/reservation/cruise/readfromsupplier">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">readFromSupplier</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cruise/recordpayment">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">recordPayment</a>({ ...params }) -> unknown</code>
- <code title="post /v2/reservation/cruise/releasecabin">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">releaseCabin</a>({ ...params }) -> CruiseReleaseCabinResponse</code>
- <code title="post /v2/reservation/cruise/SearchPackageWithSupplier">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">searchPackageWithSupplier</a>({ ...params }) -> CruiseSearchPackageWithSupplierResponse</code>
- <code title="post /v2/reservation/cruise/Search">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">searchReservation</a>({ ...params }) -> CruiseSearchReservationResponse</code>
- <code title="post /v2/reservation/cruise/SearchWithSupplier">client.reservation.cruise.<a href="./src/resources/reservation/cruise.ts">searchWithSupplier</a>({ ...params }) -> CruiseSearchWithSupplierResponse</code>

# Payment

Types:

- <code><a href="./src/resources/payment.ts">PaymentTokenizeCardResponse</a></code>

Methods:

- <code title="post /v2/payment/TokenizeCard">client.payment.<a href="./src/resources/payment.ts">tokenizeCard</a>({ ...params }) -> PaymentTokenizeCardResponse</code>

# Master

## All

Types:

- <code><a href="./src/resources/master/all.ts">AllRetrieveCruiseLineListResponse</a></code>

Methods:

- <code title="get /v2/master/All/CruiseLine">client.master.all.<a href="./src/resources/master/all.ts">retrieveCruiseLineList</a>({ ...params }) -> AllRetrieveCruiseLineListResponse</code>

# DomainTables

Types:

- <code><a href="./src/resources/domain-tables.ts">DomainTableListResponse</a></code>

Methods:

- <code title="get /v2/DomainTables">client.domainTables.<a href="./src/resources/domain-tables.ts">list</a>({ ...params }) -> DomainTableListResponse</code>

# PackageDetails

Types:

- <code><a href="./src/resources/package-details.ts">PackageDetailRetrieve36228Response</a></code>

Methods:

- <code title="get /v2/packageDetails/36228">client.packageDetails.<a href="./src/resources/package-details.ts">retrieve36228</a>({ ...params }) -> PackageDetailRetrieve36228Response</code>
