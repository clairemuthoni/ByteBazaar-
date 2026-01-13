function PricingSection() {
  return (
    <section className="bb-pricing" id="pricing">
      <h2>Invest in Your Growth</h2>
      <p>Scalable plans designed for high-performing retail teams.</p>
      <div className="bb-pricing__plans">
        <div className="bb-pricing__plan">
          <h3>Starter</h3>
          <ul>
            <li>Standard Order Management</li>
            <li>Basic Inventory Tracking</li>
            <li>Basic Sales Dashboard</li>
            <li>Unified Communications Log</li>
          </ul>
          <button>Start with Starter</button>
        </div>
        <div className="bb-pricing__plan bb-pricing__plan--highlighted">
          <h3>Professional <span className="badge">Most Popular</span></h3>
          <ul>
            <li>Everything in Starter</li>
            <li>Automated Profitability Reports</li>
            <li>Workflow Automation</li>
            <li>Marketing Integrations (SMS/Email)</li>
            <li>Team Performance Analytics</li>
          </ul>
          <button>Get Professional</button>
        </div>
        <div className="bb-pricing__plan">
          <h3>Enterprise</h3>
          <ul>
            <li>Unlimited Revenue Analytics</li>
            <li>Custom Workflows</li>
            <li>Advanced Reporting Dashboard</li>
            <li>24/7 Priority Support</li>
            <li>Dedicated Account Manager</li>
          </ul>
          <button>Talk to Sales</button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

