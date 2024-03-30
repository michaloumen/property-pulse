import properties from '../../properties.json';
import PropertyCard from '../../components/PropertyCard';

const PropertiesPage = () => {
  return (
    <div>
      <section class='px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default PropertiesPage