# UP!Investments

## Inspiration
Our inspiration came from exploring new ways to generate income and helping others do the same. Many people want to invest in real estate but don’t know where to start — whether it’s flipping houses, renting, or listing on Airbnb. We built this platform to make property investing and financial awareness more accessible by providing data-driven insights for smarter, more profitable decisions.

## What it does
Our app connects to Rapid’s API to pull live housing data and analyze which strategy — flip, rent, or Airbnb — offers the best return.

When a user searches for a property, the system:
- Fetches real-time property info like price history, neighborhood stats, and rental potential
- Uses a custom ROI algorithm to compare flipping, renting, and Airbnb outcomes
- Displays a simple profitability dashboard
- Recommends the best approach based on trends and property data
- It’s like having an investment advisor and housing analyst in one platform.

## How we built it
**Frontend:** React.js and Tailwind CSS for a responsive, modern UI.  
**Backend:** Cloudbase for secure connections, user authentication, and database management.  
**Integration:** Rapid’s API for property data and analytics, plus predictive modeling for estimating profit margins.

## Challenges we ran into
**API limits:** Managing Rapid’s API rate restrictions and changing data structures.  
**ROI modeling:** Balancing variables for different investment types (flip, rent, Airbnb).  
**Authentication:** Configuring Cloudbase and Cloudflare Workers for secure backend flow.  
**Real-time updates:** Keeping data live and responsive without reloads.

## Accomplishments that we're proud of
- Built a working platform with live API integration  
- Designed a secure backend using Cloudbase  
- Created a clear, interactive UI for investment analysis  
- Developed a reliable ROI comparison algorithm  
- Delivered an MVP that helps users make informed property decisions
