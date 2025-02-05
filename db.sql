-- Inserting parent categories with timestamps
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at)
VALUES
    ('Cardiogram', NULL, NOW(), NOW()),
    ('Scalpel Instrument', NULL, NOW(), NOW()),
    ('Microscope', NULL, NOW(), NOW()),
    ('First Aid Kit', NULL, NOW(), NOW()),
    ('Stethoscope', NULL, NOW(), NOW()),
    ('Thermometer', NULL, NOW(), NOW()),
    ('Dumbbells', NULL, NOW(), NOW()),
    ('Notebook', NULL, NOW(), NOW()),
    ('Wheelchair', NULL, NOW(), NOW()),
    ('Syringe', NULL, NOW(), NOW()),
    ('Weighing Scale', NULL, NOW(), NOW());





-- Insert Subcategories for Weighing Scale
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Digital Weighing Scale', (SELECT id FROM product_productcategory WHERE title = 'Weighing Scale'), NOW(), NOW()),
    ('Mechanical Weighing Scale', (SELECT id FROM product_productcategory WHERE title = 'Weighing Scale'), NOW(), NOW()),
    ('Smart Body Weight Scale', (SELECT id FROM product_productcategory WHERE title = 'Weighing Scale'), NOW(), NOW()),
    ('Bathroom Weighing Scale', (SELECT id FROM product_productcategory WHERE title = 'Weighing Scale'), NOW(), NOW());

-- Insert Subcategories for Syringe
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Disposable Syringes', (SELECT id FROM product_productcategory WHERE title = 'Syringe'), NOW(), NOW()),
    ('Insulin Syringes', (SELECT id FROM product_productcategory WHERE title = 'Syringe'), NOW(), NOW()),
    ('Safety Syringes', (SELECT id FROM product_productcategory WHERE title = 'Syringe'), NOW(), NOW()),
    ('Luer Lock Syringes', (SELECT id FROM product_productcategory WHERE title = 'Syringe'), NOW(), NOW());

-- Insert Subcategories for Wheelchair
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Foldable Wheelchairs', (SELECT id FROM product_productcategory WHERE title = 'Wheelchair'), NOW(), NOW()),
    ('Electric Wheelchairs', (SELECT id FROM product_productcategory WHERE title = 'Wheelchair'), NOW(), NOW()),
    ('Manual Wheelchairs', (SELECT id FROM product_productcategory WHERE title = 'Wheelchair'), NOW(), NOW()),
    ('Reclining Wheelchairs', (SELECT id FROM product_productcategory WHERE title = 'Wheelchair'), NOW(), NOW());

-- Insert Subcategories for Notebook
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Medical Research Notebooks', (SELECT id FROM product_productcategory WHERE title = 'Notebook'), NOW(), NOW()),
    ('Pocket-size Notebooks', (SELECT id FROM product_productcategory WHERE title = 'Notebook'), NOW(), NOW()),
    ('Lab Notebooks', (SELECT id FROM product_productcategory WHERE title = 'Notebook'), NOW(), NOW()),
    ('Pocket-sized Journals', (SELECT id FROM product_productcategory WHERE title = 'Notebook'), NOW(), NOW());

-- Insert Subcategories for Dumbbells
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Adjustable Dumbbells', (SELECT id FROM product_productcategory WHERE title = 'Dumbbells'), NOW(), NOW()),
    ('Hexagonal Dumbbells', (SELECT id FROM product_productcategory WHERE title = 'Dumbbells'), NOW(), NOW()),
    ('Rubber-coated Dumbbells', (SELECT id FROM product_productcategory WHERE title = 'Dumbbells'), NOW(), NOW()),
    ('Vinyl Dumbbells', (SELECT id FROM product_productcategory WHERE title = 'Dumbbells'), NOW(), NOW());

-- Insert Subcategories for Thermometer
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Infrared Thermometers', (SELECT id FROM product_productcategory WHERE title = 'Thermometer'), NOW(), NOW()),
    ('Digital Thermometers', (SELECT id FROM product_productcategory WHERE title = 'Thermometer'), NOW(), NOW()),
    ('Mercury Thermometers', (SELECT id FROM product_productcategory WHERE title = 'Thermometer'), NOW(), NOW()),
    ('Clinical Thermometers', (SELECT id FROM product_productcategory WHERE title = 'Thermometer'), NOW(), NOW());

-- Insert Subcategories for Stethoscope
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Digital Stethoscopes', (SELECT id FROM product_productcategory WHERE title = 'Stethoscope'), NOW(), NOW()),
    ('Dual Head Stethoscopes', (SELECT id FROM product_productcategory WHERE title = 'Stethoscope'), NOW(), NOW()),
    ('Lightweight Stethoscopes', (SELECT id FROM product_productcategory WHERE title = 'Stethoscope'), NOW(), NOW()),
    ('Pediatric Stethoscopes', (SELECT id FROM product_productcategory WHERE title = 'Stethoscope'), NOW(), NOW());

-- Insert Subcategories for First Aid Kit
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Basic First Aid Kit', (SELECT id FROM product_productcategory WHERE title = 'First Aid Kit'), NOW(), NOW()),
    ('Advanced First Aid Kit', (SELECT id FROM product_productcategory WHERE title = 'First Aid Kit'), NOW(), NOW()),
    ('Travel First Aid Kit', (SELECT id FROM product_productcategory WHERE title = 'First Aid Kit'), NOW(), NOW()),
    ('Industrial First Aid Kit', (SELECT id FROM product_productcategory WHERE title = 'First Aid Kit'), NOW(), NOW());

-- Insert Subcategories for Microscope
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Digital Microscopes', (SELECT id FROM product_productcategory WHERE title = 'Microscope'), NOW(), NOW()),
    ('Biological Research Microscopes', (SELECT id FROM product_productcategory WHERE title = 'Microscope'), NOW(), NOW()),
    ('USB Microscopes', (SELECT id FROM product_productcategory WHERE title = 'Microscope'), NOW(), NOW()),
    ('Student Microscopes', (SELECT id FROM product_productcategory WHERE title = 'Microscope'), NOW(), NOW());

-- Insert Subcategories for Scalpel Instrument
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Disposable Scalpel Blades', (SELECT id FROM product_productcategory WHERE title = 'Scalpel Instrument'), NOW(), NOW()),
    ('Surgical Scalpels', (SELECT id FROM product_productcategory WHERE title = 'Scalpel Instrument'), NOW(), NOW()),
    ('Stainless Steel Scalpels', (SELECT id FROM product_productcategory WHERE title = 'Scalpel Instrument'), NOW(), NOW()),
    ('Sterile Scalpel Blades', (SELECT id FROM product_productcategory WHERE title = 'Scalpel Instrument'), NOW(), NOW());

-- Insert Subcategories for Cardiogram
INSERT INTO product_productcategory (title, parent_id, created_at, updated_at) VALUES
    ('Portable ECG Monitors', (SELECT id FROM product_productcategory WHERE title = 'Cardiogram'), NOW(), NOW()),
    ('Heart Rate Monitors', (SELECT id FROM product_productcategory WHERE title = 'Cardiogram'), NOW(), NOW()),
    ('Blood Pressure Monitors', (SELECT id FROM product_productcategory WHERE title = 'Cardiogram'), NOW(), NOW()),
    ('EKG Machines', (SELECT id FROM product_productcategory WHERE title = 'Cardiogram'), NOW(), NOW());





------------------------------
-- 1. Weighing Scale Subcategories
------------------------------

-- Digital Weighing Scale
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES 
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Weighing Scale'),
   'Smart Digital Weighing Scale',
   'High-precision digital scale with body composition analysis.',
   49.99, 'image/product/smart_digital_scale.jpg', 150, 2.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Weighing Scale'),
   'Advanced Digital Weighing Scale',
   'Bluetooth-enabled scale with smartphone integration.',
   69.99, 'image/product/advanced_digital_scale.jpg', 120, 2.5, NOW(), NOW());

-- Mechanical Weighing Scale
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES 
  ((SELECT id FROM product_productcategory WHERE title = 'Mechanical Weighing Scale'),
   'Classic Mechanical Scale',
   'Durable mechanical scale with analog dial.',
   29.99, 'image/product/classic_mechanical_scale.jpg', 200, 4.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Mechanical Weighing Scale'),
   'Heavy Duty Mechanical Scale',
   'Robust scale designed for heavy usage.',
   39.99, 'image/product/heavy_duty_mechanical_scale.jpg', 150, 5.0, NOW(), NOW());

-- Smart Body Weight Scale
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES 
  ((SELECT id FROM product_productcategory WHERE title = 'Smart Body Weight Scale'),
   'WiFi Smart Body Weight Scale',
   'Scale with WiFi connectivity and health tracking features.',
   79.99, 'image/product/wifi_smart_scale.jpg', 100, 2.3, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Smart Body Weight Scale'),
   'Smart Body Composition Analyzer',
   'Measures body fat, muscle, and water composition.',
   89.99, 'image/product/smart_body_composition.jpg', 90, 2.4, NOW(), NOW());

-- Bathroom Weighing Scale
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES 
  ((SELECT id FROM product_productcategory WHERE title = 'Bathroom Weighing Scale'),
   'Sleek Bathroom Scale',
   'Modern design scale for bathroom use.',
   34.99, 'image/product/sleek_bathroom_scale.jpg', 180, 3.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Bathroom Weighing Scale'),
   'Compact Bathroom Scale',
   'Space-saving design with accurate measurements.',
   24.99, 'image/product/compact_bathroom_scale.jpg', 220, 2.8, NOW(), NOW());

------------------------------
-- 2. Syringe Subcategories
------------------------------

-- Disposable Syringes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Disposable Syringes'),
   'Sterile Disposable Syringes 10ml',
   'Pack of 100 sterile disposable syringes for general use.',
   29.99, 'image/product/sterile_disposable_syringes_10ml.jpg', 500, 0.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Disposable Syringes'),
   'Disposable Syringes 5ml',
   'Pack of 100 disposable syringes for precise dosing.',
   19.99, 'image/product/disposable_syringes_5ml.jpg', 600, 0.4, NOW(), NOW());

-- Insulin Syringes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Insulin Syringes'),
   'Insulin Syringes - Pack of 50',
   'Pack of 50 insulin syringes for diabetes management.',
   19.99, 'image/product/insulin_syringes_50.jpg', 300, 0.4, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Insulin Syringes'),
   'Insulin Syringes - Pack of 100',
   'Economical pack of 100 insulin syringes.',
   34.99, 'image/product/insulin_syringes_100.jpg', 250, 0.5, NOW(), NOW());

-- Safety Syringes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Safety Syringes'),
   'Auto-disable Safety Syringes',
   'Safety syringes that automatically disable after one use.',
   24.99, 'image/product/auto_disable_syringes.jpg', 400, 0.45, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Safety Syringes'),
   'Needle-Free Safety Syringes',
   'Innovative needle-free safety syringe for reduced risk.',
   29.99, 'image/product/needle_free_syringes.jpg', 350, 0.5, NOW(), NOW());

-- Luer Lock Syringes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Luer Lock Syringes'),
   'Luer Lock Syringes 5ml',
   'High-quality Luer lock syringes for secure connections.',
   22.99, 'image/product/luer_lock_5ml.jpg', 450, 0.42, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Luer Lock Syringes'),
   'Luer Lock Syringes 10ml',
   '10ml Luer lock syringes for medical precision.',
   27.99, 'image/product/luer_lock_10ml.jpg', 400, 0.5, NOW(), NOW());

------------------------------
-- 3. Wheelchair Subcategories
------------------------------

-- Foldable Wheelchairs
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Foldable Wheelchairs'),
   'Lightweight Foldable Wheelchair',
   'Compact and foldable wheelchair with an aluminum frame.',
   249.99, 'image/product/lightweight_foldable_wheelchair.jpg', 50, 12.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Foldable Wheelchairs'),
   'Portable Foldable Wheelchair',
   'Easy-to-carry foldable wheelchair designed for travel.',
   299.99, 'image/product/portable_foldable_wheelchair.jpg', 40, 13.5, NOW(), NOW());

-- Electric Wheelchairs
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Electric Wheelchairs'),
   'Battery-Powered Electric Wheelchair',
   'Electric wheelchair with remote control and rechargeable battery.',
   899.99, 'image/product/battery_electric_wheelchair.jpg', 15, 25.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Electric Wheelchairs'),
   'Rechargeable Electric Wheelchair',
   'Modern electric wheelchair with joystick control.',
   999.99, 'image/product/rechargeable_electric_wheelchair.jpg', 10, 30.0, NOW(), NOW());

-- Manual Wheelchairs
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Manual Wheelchairs'),
   'Standard Manual Wheelchair',
   'Reliable manual wheelchair with cushioned seating for daily use.',
   349.99, 'image/product/standard_manual_wheelchair.jpg', 35, 20.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Manual Wheelchairs'),
   'Lightweight Manual Wheelchair',
   'Manual wheelchair made with lightweight materials for easier handling.',
   329.99, 'image/product/lightweight_manual_wheelchair.jpg', 45, 18.0, NOW(), NOW());

-- Reclining Wheelchairs
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Reclining Wheelchairs'),
   'Reclining Comfort Wheelchair',
   'Wheelchair with reclining backrest for enhanced comfort.',
   399.99, 'image/product/reclining_comfort_wheelchair.jpg', 30, 22.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Reclining Wheelchairs'),
   'Luxury Reclining Wheelchair',
   'Premium reclining wheelchair with adjustable footrests and padded seating.',
   499.99, 'image/product/luxury_reclining_wheelchair.jpg', 20, 24.0, NOW(), NOW());

------------------------------
-- 4. Notebook Subcategories
------------------------------

-- Medical Research Notebooks
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Medical Research Notebooks'),
   'Hardcover Medical Research Notebook',
   'Durable hardcover notebook for lab notes and research observations.',
   14.99, 'image/product/hardcover_medical_notebook.jpg', 300, 0.6, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Medical Research Notebooks'),
   'A5 Medical Journal',
   'Compact A5 notebook ideal for recording medical data.',
   7.99, 'image/product/a5_medical_journal.jpg', 500, 0.4, NOW(), NOW());

-- Pocket-size Notebooks
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Pocket-size Notebooks'),
   'Pocket Medical Notebook',
   'Small and portable notebook for quick medical notes.',
   5.99, 'image/product/pocket_medical_notebook.jpg', 400, 0.3, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Pocket-size Notebooks'),
   'Compact Pocket Notebook',
   'Ideal for carrying in a lab coat pocket for on-the-go note-taking.',
   4.99, 'image/product/compact_pocket_notebook.jpg', 600, 0.2, NOW(), NOW());

-- Lab Notebooks
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Lab Notebooks'),
   'Spiral Lab Notebook',
   'Spiral-bound notebook designed for laboratory experiments.',
   9.99, 'image/product/spiral_lab_notebook.jpg', 350, 0.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Lab Notebooks'),
   'Scientific Lab Notebook',
   'Notebook with grid pages for scientific data logging.',
   11.99, 'image/product/scientific_lab_notebook.jpg', 300, 0.55, NOW(), NOW());

-- Pocket-sized Journals
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Pocket-sized Journals'),
   'Leather Pocket Journal',
   'Elegant leather-bound journal for personal or medical notes.',
   12.99, 'image/product/leather_pocket_journal.jpg', 250, 0.4, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Pocket-sized Journals'),
   'Mini Journal',
   'Small journal ideal for quick notes during rounds.',
   6.99, 'image/product/mini_journal.jpg', 300, 0.3, NOW(), NOW());

------------------------------
-- 5. Dumbbells Subcategories
------------------------------

-- Adjustable Dumbbells
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Adjustable Dumbbells'),
   'Adjustable Dumbbell Set (2-24 kg)',
   'Set of adjustable dumbbells with weight increments from 2 to 24 kg.',
   99.99, 'image/product/adjustable_dumbbell_set.jpg', 150, 20.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Adjustable Dumbbells'),
   'Compact Adjustable Dumbbell',
   'Space-saving adjustable dumbbell ideal for home workouts.',
   89.99, 'image/product/compact_adjustable_dumbbell.jpg', 120, 18.0, NOW(), NOW());

-- Hexagonal Dumbbells
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Hexagonal Dumbbells'),
   'Hex Dumbbell Set',
   'Set of hexagonal dumbbells for stable grip and reduced noise.',
   79.99, 'image/product/hex_dumbbell_set.jpg', 100, 15.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Hexagonal Dumbbells'),
   'Single Hex Dumbbell',
   'Durable hex dumbbell available in multiple weights.',
   39.99, 'image/product/single_hex_dumbbell.jpg', 140, 12.0, NOW(), NOW());

-- Rubber-coated Dumbbells
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Rubber-coated Dumbbells'),
   'Rubber-coated Dumbbell Pair',
   'Pair of rubber-coated dumbbells for comfortable grip.',
   59.99, 'image/product/rubber_coated_dumbbell_pair.jpg', 120, 10.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Rubber-coated Dumbbells'),
   'Set of Rubber-coated Dumbbells',
   'Set of varied weight rubber-coated dumbbells for strength training.',
   129.99, 'image/product/rubber_coated_dumbbell_set.jpg', 80, 20.0, NOW(), NOW());

-- Vinyl Dumbbells
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Vinyl Dumbbells'),
   'Vinyl Dumbbell Pair',
   'Comfortable vinyl dumbbells with non-slip coating.',
   49.99, 'image/product/vinyl_dumbbell_pair.jpg', 110, 8.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Vinyl Dumbbells'),
   'Set of Vinyl Dumbbells',
   'Set of vinyl dumbbells available in different weights.',
   89.99, 'image/product/vinyl_dumbbell_set.jpg', 90, 16.0, NOW(), NOW());

------------------------------
-- 6. Thermometer Subcategories
------------------------------

-- Infrared Thermometers
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Infrared Thermometers'),
   'Non-Contact Infrared Thermometer',
   'Quick and accurate non-contact thermometer with LCD display.',
   39.99, 'image/product/non_contact_infrared_thermometer.jpg', 200, 0.4, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Infrared Thermometers'),
   'Infrared Thermometer with Laser Guide',
   'Infrared thermometer featuring laser guidance for precision.',
   49.99, 'image/product/laser_infrared_thermometer.jpg', 180, 0.45, NOW(), NOW());

-- Digital Thermometers
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Thermometers'),
   'Digital Oral Thermometer',
   'Accurate digital thermometer for oral temperature measurements.',
   24.99, 'image/product/digital_oral_thermometer.jpg', 220, 0.2, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Thermometers'),
   'Digital Ear Thermometer',
   'Fast digital thermometer for ear temperature measurement.',
   29.99, 'image/product/digital_ear_thermometer.jpg', 200, 0.25, NOW(), NOW());

-- Mercury Thermometers
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Mercury Thermometers'),
   'Classic Mercury Thermometer',
   'Traditional mercury thermometer for precise temperature readings.',
   12.99, 'image/product/classic_mercury_thermometer.jpg', 150, 0.2, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Mercury Thermometers'),
   'Antique Mercury Thermometer',
   'Antique-style mercury thermometer for collectors and labs.',
   19.99, 'image/product/antique_mercury_thermometer.jpg', 100, 0.25, NOW(), NOW());

-- Clinical Thermometers
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Clinical Thermometers'),
   'Clinical Digital Thermometer',
   'Digital thermometer designed for clinical and hospital use.',
   34.99, 'image/product/clinical_digital_thermometer.jpg', 130, 0.3, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Clinical Thermometers'),
   'Medical Clinical Thermometer',
   'High-accuracy clinical thermometer with rapid response time.',
   39.99, 'image/product/medical_clinical_thermometer.jpg', 120, 0.35, NOW(), NOW());

------------------------------
-- 7. Stethoscope Subcategories
------------------------------

-- Digital Stethoscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Stethoscopes'),
   'Electronic Digital Stethoscope',
   'Electronic stethoscope with sound amplification and noise reduction.',
   179.99, 'image/product/electronic_digital_stethoscope.jpg', 80, 0.4, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Stethoscopes'),
   'Bluetooth Digital Stethoscope',
   'Stethoscope with Bluetooth connectivity for audio recording.',
   199.99, 'image/product/bluetooth_digital_stethoscope.jpg', 70, 0.45, NOW(), NOW());

-- Dual Head Stethoscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Dual Head Stethoscopes'),
   'Dual Head Acoustic Stethoscope',
   'Traditional dual-head stethoscope for enhanced acoustic performance.',
   99.99, 'image/product/dual_head_acoustic_stethoscope.jpg', 90, 0.3, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Dual Head Stethoscopes'),
   'Dual Head Professional Stethoscope',
   'Professional-grade stethoscope with dual-head design for clarity.',
   119.99, 'image/product/dual_head_professional_stethoscope.jpg', 80, 0.35, NOW(), NOW());

-- Lightweight Stethoscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Lightweight Stethoscopes'),
   'Ultra Lightweight Stethoscope',
   'Stethoscope designed for ease of use and long shifts.',
   89.99, 'image/product/ultra_lightweight_stethoscope.jpg', 100, 0.28, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Lightweight Stethoscopes'),
   'Compact Lightweight Stethoscope',
   'Compact design stethoscope perfect for travel and daily use.',
   79.99, 'image/product/compact_lightweight_stethoscope.jpg', 110, 0.3, NOW(), NOW());

-- Pediatric Stethoscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Pediatric Stethoscopes'),
   'Pediatric Stethoscope',
   'Stethoscope designed specifically for pediatric patients.',
   89.99, 'image/product/pediatric_stethoscope.jpg', 95, 0.32, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Pediatric Stethoscopes'),
   'Child-Friendly Stethoscope',
   'Colorful and ergonomic stethoscope for children.',
   79.99, 'image/product/child_friendly_stethoscope.jpg', 85, 0.3, NOW(), NOW());

------------------------------
-- 8. First Aid Kit Subcategories
------------------------------

-- Basic First Aid Kit
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Basic First Aid Kit'),
   'Home Basic First Aid Kit',
   'Essential supplies for minor injuries and emergencies at home.',
   24.99, 'image/product/home_basic_first_aid_kit.jpg', 300, 1.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Basic First Aid Kit'),
   'Travel Basic First Aid Kit',
   'Compact first aid kit for travel and outdoor activities.',
   19.99, 'image/product/travel_basic_first_aid_kit.jpg', 350, 0.8, NOW(), NOW());

-- Advanced First Aid Kit
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Advanced First Aid Kit'),
   'Advanced Home First Aid Kit',
   'Extended supplies for home emergencies with additional medical tools.',
   39.99, 'image/product/advanced_home_first_aid_kit.jpg', 250, 1.2, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Advanced First Aid Kit'),
   'Advanced Travel First Aid Kit',
   'Enhanced first aid kit for travel with extra supplies.',
   34.99, 'image/product/advanced_travel_first_aid_kit.jpg', 220, 1.1, NOW(), NOW());

-- Travel First Aid Kit
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Travel First Aid Kit'),
   'Compact Travel First Aid Kit',
   'Lightweight and compact kit for travel emergencies.',
   29.99, 'image/product/compact_travel_first_aid_kit.jpg', 320, 0.9, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Travel First Aid Kit'),
   'Portable Travel First Aid Kit',
   'Portable kit designed for travel with essential supplies.',
   27.99, 'image/product/portable_travel_first_aid_kit.jpg', 300, 0.85, NOW(), NOW());

-- Industrial First Aid Kit
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Industrial First Aid Kit'),
   'Industrial Grade First Aid Kit',
   'Robust first aid kit designed for industrial and workplace safety.',
   89.99, 'image/product/industrial_first_aid_kit.jpg', 150, 2.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Industrial First Aid Kit'),
   'Heavy-Duty Industrial First Aid Kit',
   'Comprehensive kit for industrial settings with extra supplies.',
   99.99, 'image/product/heavy_duty_industrial_first_aid_kit.jpg', 120, 2.8, NOW(), NOW());

------------------------------
-- 9. Microscope Subcategories
------------------------------

-- Digital Microscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Microscopes'),
   'USB Digital Microscope',
   'High-resolution USB microscope for computer connectivity.',
   149.99, 'image/product/usb_digital_microscope.jpg', 60, 2.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Digital Microscopes'),
   'Portable Digital Microscope',
   'Compact digital microscope ideal for field research.',
   129.99, 'image/product/portable_digital_microscope.jpg', 70, 1.8, NOW(), NOW());

-- Biological Research Microscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Biological Research Microscopes'),
   'Advanced Research Microscope',
   'High-end microscope with oil immersion and LED lighting.',
   899.99, 'image/product/advanced_research_microscope.jpg', 20, 8.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Biological Research Microscopes'),
   'Professional Biological Microscope',
   'Microscope designed for professional biological research.',
   799.99, 'image/product/professional_bio_microscope.jpg', 25, 7.8, NOW(), NOW());

-- USB Microscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'USB Microscopes'),
   'Budget USB Microscope',
   'Affordable USB microscope for basic research and education.',
   99.99, 'image/product/budget_usb_microscope.jpg', 80, 1.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'USB Microscopes'),
   'High-Res USB Microscope',
   'USB microscope with high resolution and clear imaging.',
   129.99, 'image/product/high_res_usb_microscope.jpg', 70, 1.7, NOW(), NOW());

-- Student Microscopes
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Student Microscopes'),
   'Basic Student Microscope',
   'Simple microscope ideal for educational purposes.',
   59.99, 'image/product/basic_student_microscope.jpg', 100, 2.0, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Student Microscopes'),
   'Portable Student Microscope',
   'Lightweight and portable microscope designed for students.',
   69.99, 'image/product/portable_student_microscope.jpg', 90, 1.8, NOW(), NOW());

------------------------------
-- 10. Scalpel Instrument Subcategories
------------------------------

-- Disposable Scalpel Blades
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Disposable Scalpel Blades'),
   'Pack of Disposable Scalpel Blades',
   'Pack of 50 sterile disposable scalpel blades.',
   15.99, 'image/product/disposable_scalpel_blades.jpg', 500, 0.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Disposable Scalpel Blades'),
   'Premium Disposable Scalpel Blades',
   'High-quality disposable blades for surgical precision.',
   18.99, 'image/product/premium_scalpel_blades.jpg', 450, 0.5, NOW(), NOW());

-- Surgical Scalpels
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Surgical Scalpels'),
   'Standard Surgical Scalpel',
   'Reliable surgical scalpel for general procedures.',
   25.99, 'image/product/standard_surgical_scalpel.jpg', 300, 0.3, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Surgical Scalpels'),
   'Precision Surgical Scalpel',
   'Precision scalpel designed for delicate surgical operations.',
   29.99, 'image/product/precision_surgical_scalpel.jpg', 280, 0.35, NOW(), NOW());

-- Stainless Steel Scalpels
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Stainless Steel Scalpels'),
   'Stainless Steel Scalpel',
   'Durable stainless steel scalpel for repeated use.',
   27.99, 'image/product/stainless_steel_scalpel.jpg', 320, 0.32, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Stainless Steel Scalpels'),
   'Premium Stainless Steel Scalpel',
   'High-grade stainless steel scalpel with ergonomic handle.',
   31.99, 'image/product/premium_stainless_scalpel.jpg', 300, 0.35, NOW(), NOW());

-- Sterile Scalpel Blades
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Sterile Scalpel Blades'),
   'Sterile Scalpel Blade Pack',
   'Pack of 50 sterile scalpel blades for surgical use.',
   16.99, 'image/product/sterile_scalpel_blade_pack.jpg', 400, 0.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Sterile Scalpel Blades'),
   'Extra Sterile Scalpel Blades',
   'Pack of 100 ultra-sterile scalpel blades.',
   29.99, 'image/product/extra_sterile_scalpel_blades.jpg', 350, 0.5, NOW(), NOW());

------------------------------
-- 11. Cardiogram Subcategories
------------------------------

-- Portable ECG Monitors
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Portable ECG Monitors'),
   'Portable ECG Monitor Pro',
   'Compact ECG monitor with wireless data transmission.',
   199.99, 'image/product/portable_ecg_monitor_pro.jpg', 40, 2.8, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Portable ECG Monitors'),
   'Portable ECG Monitor Lite',
   'Light and portable ECG monitor for everyday use.',
   149.99, 'image/product/portable_ecg_monitor_lite.jpg', 50, 2.5, NOW(), NOW());

-- Heart Rate Monitors
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Heart Rate Monitors'),
   'Wireless Heart Rate Monitor',
   'Bluetooth-enabled heart rate monitor with real-time tracking.',
   99.99, 'image/product/wireless_heart_rate_monitor.jpg', 80, 1.2, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Heart Rate Monitors'),
   'Chest Strap Heart Rate Monitor',
   'Accurate heart rate monitoring with a comfortable chest strap.',
   89.99, 'image/product/chest_strap_heart_rate_monitor.jpg', 90, 1.1, NOW(), NOW());

-- Blood Pressure Monitors
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'Blood Pressure Monitors'),
   'Digital Blood Pressure Monitor',
   'Easy-to-use digital blood pressure monitor with large display.',
   79.99, 'image/product/digital_bp_monitor.jpg', 100, 1.3, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'Blood Pressure Monitors'),
   'Arm Cuff Blood Pressure Monitor',
   'Accurate arm cuff monitor for home blood pressure tracking.',
   69.99, 'image/product/arm_cuff_bp_monitor.jpg', 110, 1.2, NOW(), NOW());

-- EKG Machines
INSERT INTO product_product (category_id, title, description, price, cover_image, quantity, weight, created_at, updated_at)
VALUES
  ((SELECT id FROM product_productcategory WHERE title = 'EKG Machines'),
   'Portable EKG Machine',
   'Compact EKG machine suitable for ambulatory monitoring.',
   299.99, 'image/product/portable_ekg_machine.jpg', 25, 3.5, NOW(), NOW()),
  ((SELECT id FROM product_productcategory WHERE title = 'EKG Machines'),
   'Advanced EKG Machine',
   'High-end EKG machine with multi-lead support for clinical use.',
   399.99, 'image/product/advanced_ekg_machine.jpg', 20, 4.0, NOW(), NOW());