import React from "react";
import moment from "moment";
import "./Calendar.scss";

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.weekdayshort = moment.weekdaysShort();
        this.MonthTable = this.MonthTable.bind(this);
        this.YearTable = this.YearTable.bind(this);
        this.state = {
            showYearTable: false,
            showMonthTable: false,
            showDateTable: true,
            dateObject: moment(),
            allMonths: moment.months()
        }
    }

    hasDateChanged(data,field) {
        if (data == field && moment().isSame(this.state.dateObject, "date")) {
            return false;
        }
        return true;
    }

    currentDay() {
        return this.state.dateObject.format("D");
    }

    currentMonth() {
        return this.state.dateObject.format("MMMM");
    }

    currentYear() {
        return this.state.dateObject.format("Y");
    }

    daysInMonth() {
        return this.state.dateObject.daysInMonth();
    }

    firstDayOfMonth() {
        // console.log(this);
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d");
        return firstDay;
    }

    showMonthTable(e) {
        this.setState({
            showMonthTable: !this.state.showMonthTable,
            showDateTable: !this.state.showDateTable
        });
    }

    setMonth(month) {
        let monthNo = this.state.allMonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("month", monthNo);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showDateTable: !this.state.showDateTable
        });
    }

    MonthTable(props) {
        let months = [];
        props.data.map(data => {
            let currentMonth = !this.hasDateChanged(data, this.currentMonth()) ? "date-today" : "";
            months.push(
                <td
                    key={data}
                    className={`calendar-month ${currentMonth}`}
                    onClick={e => {
                        this.setMonth(data)
                        // console.log(this.setMonth)
                    }}
                >
                    <span className="inner">{data}</span>
                </td>
            );
        });

        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);

        let monthlist = rows.map((d, i) => {
            return <tr key={i} >{d}</tr>
        });

        return (
            <table className="calendar-months">
                <thead>
                    <tr>
                        <th colSpan={3}>Select a Month</th>
                    </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    }

    getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment({ year: startDate });
        var stopDate = moment({ year: stopDate });
        while (currentDate < stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }

    setYear(year) {
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showYearTable: !this.state.showYearTable
        });
    }

    showYearTable(e) {
        this.setState({
            showYearTable: !this.state.showYearTable,
            showMonthTable: !this.state.showMonthTable
        });
    }

    YearTable({ year }) {
        let months = [];
        let start = (parseInt(year) - parseInt(year) % 10 - 1);
        let end = moment()
            .set("year", start)
            .add("year", 12)
            .format("Y");

        let twleveYears = this.getDates(start, end);

        twleveYears.map(data => {
            let currentYear = !this.hasDateChanged(data, this.currentYear()) ? "date-today" : "";
            months.push(
                <td
                    key={data}
                    className={`calendar-year ${currentYear}`}
                    onClick={e => {
                        this.setYear(data);
                    }}
                >
                    <span className="inner">{data}</span>
                </td>
            )
        })

        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let yearList = rows.map((d, i) => (
            <tr>{d}</tr>
        ));

        return (
            <table className="calendar-month">
                <thead>
                    <tr>
                        <th colSpan={4}>Select a Year</th>
                    </tr>
                </thead>
                <tbody>{yearList}</tbody>
            </table>
        );

    }

    onPrev() {
        let curr = "";
        let count = 1;
        if (this.state.showYearTable) {
            curr = "year";
            count = 10;
        } else if (this.state.showMonthTable) {
            curr = "year";
        } else if (this.state.showDateTable) {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.subtract(count, curr)
        });
    }

    onNext() {
        let curr = "";
        let count = 1;
        if (this.state.showYearTable) {
            curr = "year";
            count = 10;
        } else if (this.state.showMonthTable) {
            curr = "year";
        } else if (this.state.showDateTable) {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.add(count, curr)
        });
    }

    onDayClick(e, d) {
        this.setState({
            selectedDay: d
        },
            () => {
                console.log("SELECTED DAY: ", this.state.selectedDay);
            }
        );
    }

    calendarLabel() {
        if (this.state.showDateTable) {
            return `${this.currentMonth()}, ${this.currentYear()}`;
        } else if (this.state.showMonthTable) {
            return `${this.currentYear()}`;
        } else if (this.state.showYearTable) {
            const start = parseInt(this.currentYear()) - parseInt(this.currentYear()) % 10;
            return `${start} - ${start + 9}`
        }
    }

    render() {
        let weekdayshortname = this.weekdayshort.map(day => {
            return (
                <th key={day} className="calendar-week">
                    {day}
                </th>
            );
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(
                <td className="calendar-day empty">{""}</td>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let currentDay = !this.hasDateChanged(d, this.currentDay()) ? "date-today" : "";
            daysInMonth.push(
                <td key={d} className={`calendar-day date-current ${currentDay}`}>
                    <span className="inner" onClick={(e) => this.onDayClick(e, d)}>
                        {d}
                    </span>
                </td>
            );
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr key={i}>{d}</tr>
        });

        return (
            <div className="tail-datetime-calendar calendar-static calendar-stay calendar-open w-100">
                <div className="calendar-actions">
                    <span className="action action-prev" data-action="prev" onClick={(e) => this.onPrev()} />
                    <span className="label" data-action="view" data-view="up" onClick={(e) => {
                        if (this.state.showDateTable)
                            this.showMonthTable()
                        else if (this.state.showMonthTable)
                            this.showYearTable()

                    }}
                    >
                        {this.calendarLabel()}
                    </span>
                    <span className="action action-next" data-action="next" onClick={(e) => this.onNext()} />
                </div>

                <div className="calendar-datepicker">
                    {
                        this.state.showDateTable &&
                        <table className="calendar-days">
                            <thead>
                                <tr>{weekdayshortname}</tr>
                            </thead>
                            <tbody>{daysinmonth}</tbody>
                        </table>
                    }
                    {
                        this.state.showYearTable &&
                        <this.YearTable year={this.currentYear()} />
                    }

                    {
                        this.state.showMonthTable &&
                        <this.MonthTable data={moment.months()} />
                    }

                </div>

            </div>
        );
    }
}