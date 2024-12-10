 const newServiceData = {
    veterinary: [
      {
        name: 'Dr. Raju',
        experienceYears: 10,
        contactInfo: {
          phone: '123-456-7890',
          email: 'raju@vetclinic.com',
          address: '123 Vet Street, Indiranagar'
        }
      },
      {
        name: 'Dr. Naveen',
        experienceYears: 5,
        contactInfo: {
          phone: '987-654-3210',
          email: 'naveen@vetclinic.com',
          address: '456 Animal Ave, Indiranagar, Country'
        }
      }
    ],
    grooming: [
      {
        name: 'Rekha',
        yearsOfExperience: 8,
        contactInfo: {
          phone: '555-123-4567',
          email: 'rekha@groomers.com',
          address: '789 Grooming Rd, Indiranagar, Country'
        }
      },
      {
        name: 'Tom',
        yearsOfExperience: 3,
        contactInfo: {
          phone: '555-765-4321',
          email: 'tom@groomers.com',
          address: '101 Pet Blvd, Indiranagar, Country'
        }
      }
    ]
  };
  
  
  fetch('http://localhost:3000/services/addServices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newServiceData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });