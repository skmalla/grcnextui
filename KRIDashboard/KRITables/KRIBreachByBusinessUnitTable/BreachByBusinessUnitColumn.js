import columnFilter from "../../../../../../Common/UI/TableCommonComponents/ColumnFilter/ColumnFilter";

export const COLUMNS = [
  {
    Header: "S No.",
    accessor: "id",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "KRI Name",
    accessor: "risk_event_code",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "KRI Owner",
    accessor: "risk_type",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Value",
    accessor: "risk_event",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Threshold",
    accessor: "basel_risk_category",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Reporting Date",
    accessor: "basel_risk_objective",
    Filter: columnFilter,
    disableFilters: true,
  },
];
