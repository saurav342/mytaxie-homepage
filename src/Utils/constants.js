const flightData = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Lucknow", "Amritsar", "Visakhapatnam", "kannur",
"Surat", "Indore", "Kochi", "Ahmedabad", "Delhi", "Goa", "Pune", "Thiruvananthapuram", "Coimbatore",
"Calicut", "Bhubaneswar", "Guwahati", "Varanasi", "Hyderabad", "Tiruchirappalli", "Nagpur",
"Srinagar", "Imphal", "Jaipur", "Madurai", "Siliguri", "Patna", "Mangalore", "Chandigarh", "Ranchi"
];

let optionsFromData =[
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Lucknow', label: 'Lucknow' },
  { value: 'Amritsar', label: 'Amritsar' },
  { value: 'Visakhapatnam', label: 'Visakhapatnam' },
  { value: 'kannur', label: 'kannur' },
  { value: 'Surat', label: 'Surat' },
  { value: 'Indore', label: 'Indore' },
  { value: 'Kochi', label: 'Kochi' },
  { value: 'Ahmedabad', label: 'Ahmedabad' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Goa', label: 'Goa' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Thiruvananthapuram', label: 'Thiruvananthapuram' },
  { value: 'Coimbatore', label: 'Coimbatore' },
  { value: 'Calicut', label: 'Calicut' },
  { value: 'Bhubaneswar', label: 'Bhubaneswar' },
  { value: 'Guwahati', label: 'Guwahati' },
  { value: 'Varanasi', label: 'Varanasi' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Tiruchirappalli', label: 'Tiruchirappalli' },
  { value: 'Nagpur', label: 'Nagpur' },
  { value: 'Srinagar', label: 'Srinagar' },
  { value: 'Imphal', label: 'Imphal' },
  { value: 'Jaipur', label: 'Jaipur' },
  { value: 'Madurai', label: 'Madurai' },
  { value: 'Siliguri', label: 'Siliguri' },
  { value: 'Patna', label: 'Patna' },
  { value: 'Mangalore', label: 'Mangalore' },
  { value: 'Chandigarh', label: 'Chandigarh' },
  { value: 'Ranchi', label: 'Ranchi' }
];

  let optionsToData = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Lucknow', label: 'Lucknow' },
    { value: 'Amritsar', label: 'Amritsar' },
    { value: 'Visakhapatnam', label: 'Visakhapatnam' },
    { value: 'kannur', label: 'kannur' },
    { value: 'Surat', label: 'Surat' },
    { value: 'Indore', label: 'Indore' },
    { value: 'Kochi', label: 'Kochi' },
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Thiruvananthapuram', label: 'Thiruvananthapuram' },
    { value: 'Coimbatore', label: 'Coimbatore' },
    { value: 'Calicut', label: 'Calicut' },
    { value: 'Bhubaneswar', label: 'Bhubaneswar' },
    { value: 'Guwahati', label: 'Guwahati' },
    { value: 'Varanasi', label: 'Varanasi' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Tiruchirappalli', label: 'Tiruchirappalli' },
    { value: 'Nagpur', label: 'Nagpur' },
    { value: 'Srinagar', label: 'Srinagar' },
    { value: 'Imphal', label: 'Imphal' },
    { value: 'Jaipur', label: 'Jaipur' },
    { value: 'Madurai', label: 'Madurai' },
    { value: 'Siliguri', label: 'Siliguri' },
    { value: 'Patna', label: 'Patna' },
    { value: 'Mangalore', label: 'Mangalore' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Ranchi', label: 'Ranchi' }
  ];

const taxiType =["Mini", "Sedan","SUV"];


module.exports={
    taxiType,
    flightData,
    optionsFromData,
    optionsToData
}