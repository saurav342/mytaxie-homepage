const flightData = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Lucknow", "Amritsar", "Visakhapatnam", "kannur",
"Surat", "Indore", "Kochi", "Ahmedabad", "Delhi", "Goa", "Pune", "Thiruvananthapuram", "Coimbatore",
"Calicut", "Bhubaneswar", "Guwahati", "Varanasi", "Hyderabad", "Tiruchirappalli", "Nagpur",
"Srinagar", "Imphal", "Jaipur", "Madurai", "Siliguri", "Patna", "Mangalore", "Chandigarh", "Ranchi"
];

let optionsFromData = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Ranchi', label: 'Ranchi' },
    { value: 'Patna', label: 'Patna' },
    { value: 'Varanasi', label: 'Varanasi' },
    { value: 'Lucknow', label: 'Lucknow' },
    
  ];

  let optionsToData = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Ranchi', label: 'Ranchi' },
    { value: 'Patna', label: 'Patna' },
    { value: 'Varanasi', label: 'Varanasi' },
    { value: 'Lucknow', label: 'Lucknow' },
  ];

const taxiType =["Mini", "Sedan","SUV"];


module.exports={
    taxiType,
    flightData,
    optionsFromData,
    optionsToData
}