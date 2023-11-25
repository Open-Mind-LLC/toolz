import React from "react";
import Button from "../../../components/Shared/button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CountBox from "../../../components/Shared/CountBox";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import StockPieChart from "../../../components/Shared/StockPieChart";
import StockLegendItem from "../../../components/Shared/StockLegendItem";

const dashboard = () => {
  const stocks = [
    { name: "smtp", quantity: 20, color: "bg-red-500" },
    { name: "webmail", quantity: 30, color: "bg-blue-500" },
    { name: "bank logs", quantity: 15, color: "bg-yellow-500" },
  ];

  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl">Hello Root,</h1>
      </div>
      <div className="mt-6">
        <div className="h-auto w-auto rounded-md border border-gray-300 p-3">
          <p>
            If you have any Question ,Problem, Suggestion or Request Please feel
            free to Open a
            <span className="ml-2">
              <Button
                onClick={handleClick}
                className={`bg-green-400 text-white p-2 rounded-md`}
              >
                New Ticket
                <SupportAgentIcon className="mb-1 ml-1" />
              </Button>
            </span>
          </p>
          <p>
            if you want to report an order , just go to
            <span className="ml-1">
              <Button
                onClick={handleClick}
                className={`text-blue-500 text-base font-medium`}
              >
                My Orders
              </Button>
            </span>{" "}
            then click on Report #[Order Id] button. Our Domains are test.la ||
            test.io || test.site || test.pw || test.sh || test.fo || test.cc ||
            test.to || test.is || test.pro - Please Save them!
          </p>
          <Button
            onClick={handleClick}
            className={`bg-blue-500 text-white p-2 rounded-md mt-3`}
          >
            Terms of Service
          </Button>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-20">
          <div className="h-auto w-auto rounded-md border border-gray-300 p-3">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p>Balance:</p>
                  <CountBox count={0.75} />
                </div>
                <Button onClick={handleClick} className={`text-blue-400`}>
                  {`[ Add Funds]`}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p>Orders:</p>
                  <CountBox count={50} />
                </div>
                <Button onClick={handleClick} className={`text-blue-400`}>
                  {`[ Show ]`}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p>Tickets:</p>
                  <CountBox count={5} type="supportTickets" />
                </div>
                <Button onClick={handleClick} className={`text-blue-400`}>
                  {`[ Show ]`}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p>Reports:</p>
                  <CountBox count={0} />
                </div>
                <Button onClick={handleClick} className={`text-blue-400`}>
                  {`[ Show ]`}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="h-auto w-auto text-sm font-medium rounded-md border border-gray-300 p-3">
              <p>
                Interested in becoming a Seller at Root Store ?
                <span className="ml-2">
                  <Button
                    onClick={handleClick}
                    className={`bg-blue-500 text-white p-2 rounded-md mt-3`}
                  >
                    Become a Seller
                    <MonetizationOnIcon className="mb-1 ml-1" />
                  </Button>
                </span>
              </p>
              <p>Available Payment Methods</p>
              <div className="mt-1">
                <CurrencyBitcoinIcon />
                <CurrencyExchangeIcon />
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 h-auto w-auto rounded-md border border-gray-300 ">
            <p className="rounded-md border-b border-gray-300 p-3 bg-gray-200">
              News
            </p>
            <div className="p-3">
              <ul>
                <li>
                  Btc confirmation at this time btc confirmation will take more
                  time it's because of btc network congestion, please be paitent
                  2023-05-08 11:26:51
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 h-auto w-auto rounded-md border border-gray-300 ">
            <p className="rounded-md border-b border-gray-300 p-3 bg-gray-200">
              Our Stuff
            </p>
            <div className="flex flex-col items-center justify-center">
              <StockLegendItem color="bg-red-500" name="smtp" quantity={20} />
              <StockLegendItem
                color="bg-blue-500"
                name="webmails"
                quantity={30}
              />
              <StockLegendItem
                color="bg-yellow-500"
                name="bank logs"
                quantity={15}
              />
              <StockPieChart stocks={stocks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
