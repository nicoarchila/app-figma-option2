import moment from "moment";

const Dates = {
  DateFormatter: (dateStr: string) => {
    return moment(dateStr).format("DD/MM/YYYY");
  },
  DateTimeFormatter: (date: number) => {
    return new Intl.DateTimeFormat('en-US', {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}).format(date);
  },
  PaymentFormatter: (date: number) => {
    return new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(date);
  }
}

export default Dates;