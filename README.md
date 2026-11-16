# HRM One-Click Information Hub

**An All-in-One Digital Platform for BSBA-HRM Students of EARIST Manila**

Eulogio "Amang" Rodriguez Institute of Science and Technology  
Bachelor of Science in Business Administration – Major in Human Resource Management  
College of Business and Public Administration (CBPA)

---

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Opens at **http://localhost:5173**

### Build for production
```bash
npm run build
```
Output goes to the `dist/` folder.

### Preview production build
```bash
npm run preview
```

---

## Project Structure

```
src/
  components/
    Header/         Sticky nav with dropdowns + mobile menu
    Footer/         4-column footer with contact info
    BackToTop/      Scroll-to-top button
  pages/
    Home/           Homepage with hero, purposes, quick links
    AboutEARIST/    History, VMQ, core values
    AboutHRM/       Program overview, HRM functions, objectives
    Curriculum/     Accordion tables by year/semester
    LearningOutcomes/
    Resources/      YouTube channels, websites, tutorials
    Skills/         8 core competencies
    Careers/        8 career paths
    Jobs/           Job sites, resume tips, interview prep
    Activities/     5 activities + 4 achievements + gallery
    SocialMedia/    3 official Facebook pages
    Contact/        Address, map, phone, email, hours
    Feedback/       Links to Google Form
    References/     28 academic references
    NotFound/       404 page
  data/
    curriculum.js   All subject data
  styles/
    global.css      Design system (colors, typography, utilities)
```

## Replacing Gallery Images

Gallery placeholder images in the Activities page should be replaced with actual photos:
1. Add images to `src/assets/images/activities/`
2. Update the `activities` array in `src/pages/Activities/Activities.jsx`
3. Replace the `<div className="gallery-placeholder">` with an `<img>` tag

## Official Links
- EARIST Official: https://earist.edu.ph
- CBPA Facebook: https://www.facebook.com/share/1bmoKnGEdZ/
- HRMS Facebook: https://www.facebook.com/share/19ndKYN539/
- Feedback Form: https://forms.gle/RzdzNJ4UefzTzRrr9
