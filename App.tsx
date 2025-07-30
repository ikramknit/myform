
import React, { useState, useEffect, useCallback } from 'react';
import { ApplicationData, ViewMode } from './types';
import { ApplicationList } from './components/ApplicationList';
import { ApplicationForm } from './components/ApplicationForm';
import { ApplicationPreview } from './components/ApplicationPreview';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.LIST);
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [currentApplication, setCurrentApplication] = useState<ApplicationData | null>(null);

  useEffect(() => {
    try {
      const savedApps = localStorage.getItem('applications');
      if (savedApps) {
        setApplications(JSON.parse(savedApps));
      }
    } catch (error) {
      console.error("Failed to load applications from localStorage", error);
      setApplications([]);
    }
  }, []);

  const persistApplications = (apps: ApplicationData[]) => {
    try {
      localStorage.setItem('applications', JSON.stringify(apps));
    } catch (error) {
      console.error("Failed to save applications to localStorage", error);
    }
  };

  const generateUniqueId = useCallback(() => {
    let newId: string;
    do {
      newId = Math.floor(100000 + Math.random() * 900000).toString();
    } while (applications.some(app => app.id === newId));
    return newId;
  }, [applications]);

  const handleAddNew = () => {
    setCurrentApplication(null);
    setView(ViewMode.FORM);
  };

  const handleEdit = (id: string) => {
    const appToEdit = applications.find(app => app.id === id);
    if (appToEdit) {
      setCurrentApplication(appToEdit);
      setView(ViewMode.FORM);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      const updatedApps = applications.filter(app => app.id !== id);
      setApplications(updatedApps);
      persistApplications(updatedApps);
    }
  };

  const handleView = (id: string) => {
    const appToView = applications.find(app => app.id === id);
    if (appToView) {
      setCurrentApplication(appToView);
      setView(ViewMode.PREVIEW);
    }
  };
  
  const handleBackToList = () => {
      setCurrentApplication(null);
      setView(ViewMode.LIST);
  };

  const handleSubmit = (data: ApplicationData) => {
    let updatedApps;
    let newOrUpdatedApp;

    if (currentApplication && data.id === currentApplication.id) {
      // Update existing
      newOrUpdatedApp = { ...data };
      updatedApps = applications.map(app => (app.id === data.id ? newOrUpdatedApp : app));
    } else {
      // Add new
      newOrUpdatedApp = { 
          ...data, 
          id: generateUniqueId(),
          submissionDate: new Date().toLocaleDateString('en-GB')
      };
      updatedApps = [...applications, newOrUpdatedApp];
    }

    setApplications(updatedApps);
    persistApplications(updatedApps);
    setCurrentApplication(newOrUpdatedApp);
    setView(ViewMode.PREVIEW);
  };

  const renderContent = () => {
    switch (view) {
      case ViewMode.FORM:
        return <ApplicationForm onSubmit={handleSubmit} initialData={currentApplication} onBack={handleBackToList}/>;
      case ViewMode.PREVIEW:
        if (currentApplication) {
          return <ApplicationPreview data={currentApplication} onBack={handleBackToList} onEdit={handleEdit} />;
        }
        return null; // or fallback to list
      case ViewMode.LIST:
      default:
        return <ApplicationList applications={applications} onAddNew={handleAddNew} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
        <header className="bg-gradient-to-r from-sky-700 to-emerald-600 p-4 shadow-md text-white">
            <div className="max-w-7xl mx-auto flex items-center space-x-4">
                <img src="https://www.bosse.ac.in/images/logo-bosse.png" alt="BOSSE Logo" className="h-14"/>
                <div>
                  <h1 className="text-2xl font-bold">B.O.S.S.E.</h1>
                  <h2 className="text-lg font-light">Digital Admission Portal</h2>
                </div>
            </div>
        </header>
        <main>
            {renderContent()}
        </main>
        <footer className="text-center p-4 text-xs text-gray-500 border-t mt-8">
            © {new Date().getFullYear()} Board of Open Schooling & Skill Education. All Rights Reserved.
        </footer>
    </div>
  );
};

export default App;
