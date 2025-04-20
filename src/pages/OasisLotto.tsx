import React from 'react';
import SchemaArticle from '../components/SchemaArticle';
import { Ticket } from 'lucide-react';

export default function OasisLotto() {
  return (
    <article className="max-w-4xl mx-auto">
      <SchemaArticle
        title="OASIS Lotto - Spielersperre für Lotterien"
        description="Informationen zur OASIS-Sperre bei Lotterien. Erfahren Sie, wie die Spielersperre im Lottobereich funktioniert."
        url="https://example.com/oasis-lotto"
        datePublished="2024-03-14"
        imageUrl="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Ticket size={48} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">OASIS Lotto</h1>
        <img
          src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Lotterie und Spielersperre"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-gray-600">
          Die OASIS-Sperre gilt auch für Lotterien. Hier erfahren Sie alles über die Spielersperre im Lottobereich.
        </p>

        <h2 className="text-2xl font-semibold mb-4">OASIS im Lottobereich</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Stationärer Verkauf</h3>
            <p>Kontrolle in Lotto-Annahmestellen</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Online-Lotto</h3>
            <p>Automatische Prüfung bei der Registrierung</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Betroffene Lotterieprodukte</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>LOTTO 6aus49</li>
          <li>Eurojackpot</li>
          <li>KENO</li>
          <li>Rubbellose</li>
          <li>GlücksSpirale</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Wichtige Informationen</h3>
          <ul className="list-disc pl-6">
            <li>Sperre gilt für alle Lottoprodukte</li>
            <li>Keine Ausnahmen für einzelne Spielformen</li>
            <li>Kontrolle erfolgt über Personalausweis</li>
          </ul>
        </div>
      </div>
    </article>
  );
}