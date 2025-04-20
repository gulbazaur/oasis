import React from 'react';
import SchemaArticle from '../components/SchemaArticle';
import { Globe2 } from 'lucide-react';

export default function OnlineCasinoOhneOasis() {
  return (
    <article className="max-w-4xl mx-auto">
      <SchemaArticle
        title="Online Casino ohne OASIS - Internationale Anbieter"
        description="Informationen zu Online Casinos ohne OASIS-Anbindung. Erfahren Sie mehr über internationale Anbieter und wichtige rechtliche Aspekte."
        url="https://example.com/online-casino-ohne-oasis"
        datePublished="2024-03-14"
        imageUrl="https://images.unsplash.com/photo-1518895312237-a9e23508077d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Globe2 size={48} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Online Casino ohne OASIS</h1>
        <img
          src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Internationale Online Casinos"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-gray-600">
          Nicht alle Online Casinos sind an das OASIS-System angeschlossen. Hier erfahren Sie mehr über internationale Anbieter und wichtige rechtliche Aspekte.
        </p>

        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Wichtiger Hinweis</h2>
          <p className="text-red-800">
            Die Nutzung von Online Casinos ohne OASIS-Anbindung kann rechtliche Konsequenzen haben. Diese Informationen dienen ausschließlich der Aufklärung.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Rechtliche Situation</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>In Deutschland müssen Online Casinos eine Lizenz haben</li>
          <li>OASIS-Anbindung ist für lizenzierte Anbieter Pflicht</li>
          <li>Internationale Anbieter unterliegen anderen Regularien</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Spielerschutz im Ausland</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">EU-Länder</h3>
            <p>Eigene Spielerschutzsysteme und Regulierungen</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Internationale Anbieter</h3>
            <p>Unterschiedliche Schutzmaßnahmen je nach Lizenzgeber</p>
          </div>
        </div>
      </div>
    </article>
  );
}