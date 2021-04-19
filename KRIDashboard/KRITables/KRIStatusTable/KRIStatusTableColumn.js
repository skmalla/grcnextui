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
    Header: "KRI Status",
    accessor: "risk_type",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Business Unit",
    accessor: "risk_event",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "KRI Owner",
    accessor: "basel_risk_category",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Assignee",
    accessor: "basel_risk_objective",
    Filter: columnFilter,
    disableFilters: true,
  },
];
