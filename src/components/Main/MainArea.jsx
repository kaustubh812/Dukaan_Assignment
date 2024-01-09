// Importing required dependencies and styles
import React from 'react';
import './MainArea.css';

// Sample order details for demonstration
const orderDetail = {
  orderID: '#281209',
  orderDate: '7 July, 2023',
  orderAmount: '₹1,278.23',
  orderFee: '₹22',
};

// Creating an array of 19 order objects with unique IDs
const orderArray = Array.from({ length: 19 }, (_, index) => ({
  ...orderDetail,
  id: index,
}));

// Main Component
const Main = () => {
  return (
    <div className="Main"> {/* Main container */}
      
      {/* Order Overview Section */}
      <div className="Order"> 
        <div className="Overview">
          <span>Overview</span> {/* Heading for the Overview */}
          <div className="monthView">
            <span>Last Month</span> {/* Displaying the month */}
            <img src="/arrow.png" alt="" /> {/* Arrow icon for navigating to the last month */}
          </div>
        </div>
        
        {/* Order Description Section */}
        <div className="Orderdesc"> 
          <div className="Online">
            <span>Online Orders</span> {/* Number of online orders */}
            <span>231</span> {/* Displaying the count of online orders */}
          </div>
          <div className="Online">
            <span>Amount Received</span> {/* Total amount received */}
            <span>₹23,92,312.19</span> {/* Displaying the amount received */}
          </div>
        </div>
      </div>

      {/* Detailed Order Transactions */}
      <div className="OrderDetail"> 
        <span>Transactions | This Month</span> {/* Title for the transaction section */}
        
        {/* Table for displaying order details */}
        <div className="OrderTable"> 
          <div className="TableHeader">
            
            {/* Header for the table with options */}
            <div className="HeaderShortcut"> 
              <div className="InputOrderID">
                <img src="/search.png" alt="" /> {/* Search icon */}
                <span>Search by order ID...</span> {/* Placeholder text for search */}
              </div>
              
              {/* Icons for sorting and downloading */}
              <div className="TableIcon"> 
                <div className="Sort">
                  <span>Sort</span> {/* Sorting option */}
                  <img src="/Sort.png" alt="" /> {/* Sort icon */}
                </div>
                <div className="Download">
                  <img src="/download.png" alt="" /> {/* Download icon */}
                </div>
              </div>
            </div>
            
            {/* Columns of the table */}
            <div className="Column"> 
              <span>Order ID</span> {/* Column for Order ID */}
              <div className="OrderDate">
                <span>Order date</span> {/* Column for Order date */}
                <img src="/55.png" alt="" /> {/* Date icon */}
              </div>
              <span>Order Amount</span> {/* Column for Order Amount */}
              <div className="Fees">
                <span>Transaction fees</span> {/* Column for Transaction fees */}
                <img src="/66.png" alt="" /> {/* Fees icon */}
              </div>
            </div>
          </div>
          
          {/* Displaying individual order details dynamically */}
          {orderArray.map((item) => (
            <div className="ColumnData" key={item.id}>
              <span>{item.orderID}</span>
              <span>{item.orderDate}</span>
              <span>{item.orderAmount}</span>
              <span>{item.orderFee}</span>
            </div>
          ))}

          {/* Pagination controls */}
          <div className="Pagination"> 
            <div className="Prev">
              <img src="/555.png" alt="" /> {/* Previous page icon */}
              <span>Previous</span> {/* Text for navigating to previous page */}
            </div>
            <div className="Page">
              <span>1 ... 10 11 12 13 14 15 16 17 18</span> {/* Pagination numbers */}
            </div>
            <div className="Next">
              <span>Next</span> {/* Text for navigating to next page */}
              <img src="/666.png" alt="" /> {/* Next page icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
