'use client';
import { useState, useMemo } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Image from 'next/image';
import { LocationsDB } from '@/db/Locations';

const availableZipcodes = [
  '560050',
  '560043',
  '560004',
  '560100',
  '560037',
  '560094',
  '560072',
  '560064',
];

interface Coordinates {
  latitude: number;
  longitude: number;
}

// Simple in-memory cache
const coordinatesCache: Record<string, Coordinates> = {};

const SearchByPincode: React.FC = () => {
  const [inputZipcode, setInputZipcode] = useState('');
  const [nearestZipcode, setNearestZipcode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 6 && /^\d*$/.test(inputValue)) {
      setInputZipcode(inputValue);
    }
  };

  const handleFindNearest = async () => {
    if (!inputZipcode || inputZipcode.length < 6) return;

    setLoading(true);
    const inputCoords = await getCoordinates(inputZipcode);
    if (inputCoords) {
      const nearest = await getNearestZipcode(inputCoords);
      setNearestZipcode(nearest);
    }
    setLoading(false);
  };

  const getCoordinates = async (zipcode: string): Promise<Coordinates | null> => {
    if (coordinatesCache[zipcode]) return coordinatesCache[zipcode];

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${zipcode}`
      );
      const data = await res.json();
      if (data?.length > 0) {
        const coords = {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
        coordinatesCache[zipcode] = coords;
        return coords;
      }
    } catch (err) {
      console.error('Error fetching coordinates:', err);
    }
    return null;
  };

  const calculateDistance = (coords1: Coordinates, coords2: Coordinates) => {
    const R = 6371;
    const dLat = deg2rad(coords2.latitude - coords1.latitude);
    const dLon = deg2rad(coords2.longitude - coords1.longitude);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(coords1.latitude)) *
        Math.cos(deg2rad(coords2.latitude)) *
        Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  const deg2rad = (deg: number) => deg * (Math.PI / 180);

  const getNearestZipcode = async (inputCoords: Coordinates) => {
    let closestZip = '';
    let minDist = Infinity;
    for (const zip of availableZipcodes) {
      const coords = await getCoordinates(zip);
      if (!coords) continue;
      const dist = calculateDistance(inputCoords, coords);
      if (dist < minDist) {
        minDist = dist;
        closestZip = zip;
      }
    }
    return closestZip;
  };

  const selectedLocation = useMemo(
    () => LocationsDB.find((l) => l.zipCode === nearestZipcode),
    [nearestZipcode]
  );

  return (
    <div className='mb-10 flex flex-col items-center justify-center'>
      <h1 className='px-2 py-6 text-center text-3xl font-semibold lg:pt-12 lg:text-4xl'>
        Find Your Nearest Fertility Treatment Centre
      </h1>
      <p className='px-3 pb-6'>
        Enter your Zipcode / Pincode to find your nearest fertility treatment centre
      </p>
      <input
        type='text'
        placeholder='Enter your Zip Code'
        value={inputZipcode}
        onChange={handleInputChange}
        className='rounded-lg border-2 border-brandPurpleDark/50 px-3 py-2 text-center text-lg font-semibold text-brandPurpleDark focus:border-brandPurpleDark focus:outline-none'
      />
      <button
        onClick={handleFindNearest}
        disabled={loading}
        className='mx-auto mt-4 h-11 w-48 cursor-pointer rounded-lg border-2 border-brandPurpleDark px-3 py-2 text-center font-semibold text-brandPurpleDark hover:bg-brandPurpleDark hover:text-white'
      >
        {loading ? <FaSpinner className='mx-auto animate-spin' /> : 'Find Nearest Branch'}
      </button>

      {selectedLocation && (
        <div className='bg-white py-6 md:py-12'>
          <div className='flex max-w-5xl flex-col rounded-lg bg-brandPurpleDark bg-opacity-70 p-3 text-white shadow-xl backdrop-blur-2xl md:flex-row'>
            <div className='w-full px-3 md:w-6/12 md:px-0'>
              <Image
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className='rounded-lg object-cover'
                width={500}
                height={300}
                loading='lazy'
              />
            </div>
            <div className='ml-5 flex flex-col items-center justify-center space-y-3 md:items-start'>
              <div className='mt-4 font-heading text-2xl md:mt-0'>
                Fertility Treatment Centre, {selectedLocation.name}
              </div>
              <div className='text-center font-content text-lg md:text-left'>
                {selectedLocation.address}
              </div>
              <div className='flex items-center justify-center'>
                <a
                  href={`tel:${selectedLocation.phone}`}
                  className='mr-5 w-32 rounded-lg bg-brandPurpleDark/75 px-3 py-2 text-center font-content font-semibold text-white'
                >
                  Call Now
                </a>
                <a
                  href={selectedLocation.directionLink}
                  className='w-44 rounded-lg bg-brandPurpleDark/75 px-3 py-2 text-center font-content font-semibold text-white'
                >
                  Maps / Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchByPincode;
