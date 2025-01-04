export const services = {
  accommodation: {
    id: 'accommodation',
    title: 'Accommodation Services',
    options: [
      {
        title: 'Luxury Hotel Bookings',
        description: 'Premium 5-star hotels and resorts across Kashmir',
        features: ['24/7 Room Service', 'Spa & Wellness', 'Fine Dining']
      },
      {
        title: 'Houseboats Booking',
        description: 'Traditional Kashmiri houseboats on Dal Lake',
        features: ['Lake View Rooms', 'Traditional Cuisine', 'Shikara Services']
      }
    ]
  },
  transport: {
    id: 'transport',
    title: 'Transport Services',
    description: 'Car and Transport Rental Services All India',
    vehicles: [
      { type: 'Sedan', suitable: 'Couples & Small Families' },
      { type: 'SUV', suitable: 'Families & Groups' },
      { type: 'Tempo Traveller', suitable: 'Large Groups' }
    ]
  }
};