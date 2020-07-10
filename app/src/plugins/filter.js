export default function(value) {
    // Replace everything except numeric to empty string
    let tmpValue = value.toString().replace(/\D/g,'');
    // Remove zero prefix out
    tmpValue = tmpValue.toString().replace(/^0+/, '');
    console.log('Current value:', value);
    return tmpValue.length>3 ? tmpValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : tmpValue;
}