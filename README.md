# Subscription Tracker API

## 📌 Overview
The **Subscription Tracker API** helps users manage and track their subscriptions, ensuring they never miss a renewal or get charged for unwanted services. It provides RESTful endpoints to add, update, delete, and view subscriptions.

## 🚀 Features
- User authentication (JWT)
- CRUD operations for subscriptions
- Automated reminders via email/notifications

## 🛠️ Tech Stack
- **Backend:** Node.js/Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Render

## 📖 API Endpoints
| Method | Endpoint | Description |
|--------|------------|-------------|
| POST | `/auth/sign-up` | Register a new user |
| POST | `/auth/sign-in` | User login & token generation |
| GET | `/subscriptions/{id}` | Get all subscriptions of a User |
| POST | `/subscriptions/` | Create a new subscription |
| PUT | `/subscriptions/{id}` | Update subscription details |
| DELETE | `/subscriptions/{id}` | Remove a subscription |

## 📌 Future Enhancements
- Web dashboard for subscription insights
- AI-powered expense tracking
- Mobile app integration

## 📜 License
This project is licensed under the **MIT License**. See `LICENSE` for details.

## 📧 Contact
For any queries, reach out at [your-email@example.com](mailto:dsnoob@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/dhruv-singh-960071244/).

