-- ============================================
-- Jetour Market Database Schema
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================

-- Cars table: all vehicle listings (new + used)
CREATE TABLE IF NOT EXISTS cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  model VARCHAR(50) NOT NULL,          -- T2, Dashing, X70, X90, etc.
  condition VARCHAR(10) NOT NULL,      -- 'new' or 'used'
  year INTEGER NOT NULL,
  mileage INTEGER,                      -- NULL for new cars
  transmission VARCHAR(20),            -- Automatic, Manual
  fuel_type VARCHAR(20),               -- Petrol, PHEV, EV
  engine VARCHAR(100),                 -- e.g. '1.5T', '2.0T'
  seats INTEGER,
  color VARCHAR(50),
  exterior_color VARCHAR(50),
  interior_color VARCHAR(50),
  price_cny INTEGER NOT NULL,           -- Price in CNY (supplier cost)
  features TEXT[],                      -- Array of feature strings
  description TEXT,
  images TEXT[] DEFAULT '{}',           -- Array of image URLs
  thumbnail TEXT,                       -- Primary image URL
  status VARCHAR(20) DEFAULT 'available', -- available, sold, reserved
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_cars_slug ON cars(slug);
CREATE INDEX IF NOT EXISTS idx_cars_model ON cars(model);
CREATE INDEX IF NOT EXISTS idx_cars_condition ON cars(condition);
CREATE INDEX IF NOT EXISTS idx_cars_status ON cars(status);
CREATE INDEX IF NOT EXISTS idx_cars_featured ON cars(featured);

-- Enable RLS
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view available cars" ON cars;
DROP POLICY IF EXISTS "Public can view all cars" ON cars;

-- Public can view available and sold cars (sold cars shown as "Sold" on the site)
CREATE POLICY "Public can view all cars" ON cars
  FOR SELECT USING (true);

-- Inquiries table: leads from "Request Quote" / "Inquire" buttons
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  car_id UUID REFERENCES cars(id) ON DELETE SET NULL,
  name VARCHAR(200) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(200),
  country VARCHAR(100),
  message TEXT,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can create inquiries" ON inquiries;
CREATE POLICY "Public can create inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);
