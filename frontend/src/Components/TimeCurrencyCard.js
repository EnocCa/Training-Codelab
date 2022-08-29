import styles from "./TimeCurrencyCard.module.css"


/* 
:currency:
    the current chose currency
:type:
    string
:showData:
    array of bitcoin data object with timestamp and price
:type:
    list[{dict}]
*/
function TimeCurrencyCard ({currency,showData}) {
    // ToDo 10.2.1
    /* 
    set price text color
    :index:
        the index of the current object
    :type:
        int
    :return:
        CSS classname
    :rtype:
        CSS  Object
    */
    const priceColor = (index) => {
        if (index+1 == showData.length) {
            return styles.priceContainerEqual 
        }

        if (showData[index+1].price > showData[index].price){
            return styles.priceContainerDown
        }
        else if(showData[index].price > showData[index+1].price){
            return styles.priceContainerUp
        }
        else {
            return styles.priceContainerEqual
        }
    }

    // ToDo 10.2.2
    /* 
    set arrow sign for price
    :index:
        the index of the current object
    :type:
        int
    :return:
        an arrow "↑" "↓" or '-' to show the price change status
    :rtype:
        string
    */
    const arrowSign = (index) => {
        if (index+1 == showData.length) {
            return "-"
        }

        if (showData[index+1].price > showData[index].price){
            return "↓"
        }
        else if(showData[index].price > showData[index+1].price){
            return "↑"
        }
        else {
            return "-"
        }
    }
    
    // ToDo 10.2.3
    return (
        <>
        {/* reference for .map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {showData.map((d, index) => (
            <div className = {priceColor(index)}> 
            <div className = {styles.cardContainer}>
                {d.timestamp} 
                {currency === 'USD' ? " $" : " ₱"}
                {d.price}
                {arrowSign(index)}  
        </div>
        </div>
            ))}            
        </> 
    );

}

export default TimeCurrencyCard;
