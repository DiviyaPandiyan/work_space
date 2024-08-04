

export default function DashboardLayout({children}) {
    return (
      <section className="diviya-io">
        <nav> </nav>
        <h1>HEADER</h1>
        {children}
        <h1>FOOTER</h1>
      </section>
    );
  }
  