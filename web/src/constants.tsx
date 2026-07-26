import { NavItem, Service, InsurancePlan } from './types';
import { Stethoscope, HeartPulse, Baby, Brain, Clock, ShieldCheck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Clinic', href: '/about' },
  { label: 'About Doctor', href: '/about/nikhil' },
  { label: 'Services', href: '/services' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Primary Care',
    description: 'Comprehensive annual check-ups, chronic disease management, and preventative screenings for all ages.',
    icon: 'Stethoscope'
  },
  {
    title: 'Urgent Care',
    description: 'Immediate attention for non-life-threatening injuries and illnesses, including stitching and minor fractures.',
    icon: 'Clock'
  },
  {
    title: 'Pediatrics',
    description: 'Compassionate care for your little ones, from vaccinations to school physicals and sick visits.',
    icon: 'Baby'
  },
  {
    title: 'Women\'s Health',
    description: 'Dedicated services including pap smears, breast exams, and family planning counseling.',
    icon: 'HeartPulse'
  },
  {
    title: 'Mental Wellness',
    description: 'Supportive counseling and management for anxiety, depression, and stress-related conditions.',
    icon: 'Brain'
  },
  {
    title: 'Lab Testing',
    description: 'On-site blood work and rapid testing for strep, flu, and COVID-19 for your convenience.',
    icon: 'ShieldCheck'
  }
];

export const INSURANCE_PLANS: InsurancePlan[] = [
  { name: 'Aetna', type: 'Commercial' },
  { name: 'Blue Cross Blue Shield of MA', type: 'Commercial' },
  { name: 'Cigna', type: 'Commercial' },
  { name: 'Commonwealth Care Alliance', type: 'Medicaid' },
  { name: 'Fallon Community Health', type: 'Commercial, ACA Marketplace' },
  { name: 'Harvard Pilgrim Health Care', type: 'Commercial, ACA, Medicare' },
  { name: 'Humana', type: 'Commercial, Medicare' },
  { name: 'Medicare', type: 'Medicare' },
  { name: 'Tufts Health Plan', type: 'Commercial, ACA, Medicare, Medicaid' },
  { name: 'UnitedHealthcare', type: 'Commercial' },
  { name: 'Workers\' Compensation', type: 'Workplace Injury' },
  { name: 'Motor Vehicle Insurance', type: 'Progressive, Geico, etc.' },
];

export const CONTACT_INFO = {
  address: '415 Elsbree St, Suite 201, Fall River, MA',
  phone: '617-251-5065',
  email: 'care@blessingsclinic.com'
};