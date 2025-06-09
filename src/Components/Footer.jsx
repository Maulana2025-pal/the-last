import React from 'react'

function Footer() {
  return (
    <div>
      {/* Footer Mini */}
      <div className="mt-10 px-10 pb-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TokoHoodie. Semua hak dilindungi.
      </div>
    </div>
  );
}

export default Footer