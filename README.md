# ForgeFlow CI - Enterprise CI/CD Management Platform

ForgeFlow CI is a modern, responsive React application designed for CI/CD pipeline management. It features a complete authentication flow and a developer-centric dashboard.

## 🚀 Core Features
- **Modern UI**: Dark theme designed for high-performance engineering teams.
- **Auth Flow**: Login, Signup, and Password recovery with validation.
- **Dashboard**: Real-time pipeline monitoring and build log visualizations.
- **CI/CD Ready**: Includes `Jenkinsfile` and `Dockerfile` for immediate automation.

## 📁 Project Structure
- `src/app/(auth)`: Authentication routes (Login, Signup, Forgot Password).
- `src/app/dashboard`: Protected dashboard layout.
- `src/components/ui`: Reusable design system components (Shadcn UI).
- `Jenkinsfile`: Groovy-based pipeline script for Jenkins.
- `Dockerfile`: Multi-stage production container build.

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (optional)

### Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/forgeflow-ci.git
```
2. Install dependencies
```bash
npm install
```
3. Run in development mode
```bash
npm run dev
```

### Docker Deployment
Build and run the container locally:
```bash
docker build -t forgeflow-app .
docker run -p 8080:80 forgeflow-app
```

## 🏗️ Jenkins Setup
1. Create a **Pipeline** project in Jenkins.
2. In **Pipeline Definition**, select "Pipeline script from SCM".
3. Provide this repository URL and set the script path to `Jenkinsfile`.
4. Configure Webhooks in GitHub settings to trigger on every push.

## 🎨 Design System
- **Background**: #1A1A1F (Dark blue-gray)
- **Primary**: #24248F (Blue-violet)
- **Accent**: #33B1E3 (Sky blue)
- **Typography**: Space Grotesk (Modern sans-serif)

---
Developed for high-scale automation. ForgeFlow CI - Empowering Continuous Delivery.