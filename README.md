# ParkQuest: National Parks Explorer

**Discover America's National Parks**
A React-powered web app that helps users explore activities, videos, and details across all U.S. National Parks using the National Parks Service API.

---

## 🏞️ Features
- **Park Discovery**: Browse all national parks with key details (hours, descriptions, images)
- **Activity Search**: Find parks offering specific activities (hiking, camping, etc.)
- **Multimedia Gallery**: View official park videos and photos
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## 🛠️ Tech Stack
`React` `React Router` `Tailwind CSS` `National Parks Service API` `Context API`

---

## 🚀 Installation
1. Clone the repo:
```bash
git clone [git@github.com:LouisNicole/ParksProject.git]
```
2. Install dependencies:
```bash
npm install
```
3. Add your NPS API key to `.env`:
```env
REACT_APP_NPS_API_KEY=your_key_here
```
4. Run the app:
```bash
npm start
```

---

## 📌 Core User Stories (MVP)
✅ View all national parks
✅ See individual park details (hours, activities, location)
✅ Browse park photo galleries

## 🔮 Stretch Goals
- Activity-based park filtering
- Live park webcams
- Event calendars

---

## 📂 Project Structure
```
src/
├── components/ # Park cards, activity filters
├── contexts/ # Global state management
├── pages/ # Park detail, gallery views
├── services/ # API fetch utilities
└── styles/ # Tailwind configurations
```

---

## 🎥 Demo
 
---[Video](https://www.youtube.com/watch?v=cQ1xIc4kLxs)

## 💡 Lessons Learned
### Louis
- **Challenges**: API endpoint optimization, dynamic routing
- **Key Takeaways**: Advanced React Router patterns, Tailwind integration

### Nicole
- **Challenges**: Data fetching complexity, project pacing
- **Key Takeaways**: State management with Context API, data sorting techniques

---

## 📜 API Documentation
We used the National Parks Service API:
- `/parks` - Full park listings
- `/parks/{parkCode}` - Individual park details
- `/activities/parks` - Activity-to-park mappings

[Explore the API docs](https://www.nps.gov/subjects/developer/api-documentation.htm)

---

## 🙏 Credits
**Developed by**:
- [Louis Jager](https://github.com/LeaderLou1) - Routing & API Integration
- [Nicole Juarez-Flores](https://github.com/nico-j3) - UI Design & State Management

---

🌲 *Made for adventurers, by adventurers*

---

*For demo access or questions, please contact the contributors.*
