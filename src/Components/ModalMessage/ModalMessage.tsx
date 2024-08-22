import React from "react";
import { UseDetailContext } from "../../Context/DetailContext";

const ModalMessage = () => {
    const { isVisible, onClose, handleSendMessage: onSubmit, nama, email, message, phone, setNama, setEmail, setMessage, setPhone } = UseDetailContext();
  const handleClickOutside = () => {
    onClose();
  };
  if (!isVisible) return null;

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 flex items-end justify-end p-4 z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded shadow-lg border-slate-200 border"
      >
        <h2 className="text-lg font-semibold">
          Tulis Pertanyaan Kamu Disini Ya!
        </h2>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            No. Telepon / WhatsApp
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Pesan yang ingin ditanyakan
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          onClick={onSubmit}
          className="mt-2 px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ModalMessage;
