"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CRMComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate chart bars
      barsRef.current.forEach((bar, index) => {
        gsap.from(bar, {
          height: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToBarRefs = (el: HTMLDivElement) => {
    if (el && !barsRef.current.includes(el)) {
      barsRef.current.push(el);
    }
  };

  const chartData = [
    {
      metric: "Admin Time (Weekly)",
      manual: 20,
      crm: 6,
      unit: "hours"
    },
    {
      metric: "Lead Conversion Rate",
      manual: 15,
      crm: 35,
      unit: "%"
    },
    {
      metric: "Missed Leads",
      manual: 30,
      crm: 5,
      unit: "%"
    }
  ];

  return (
    <section ref={sectionRef} style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '20px',
            fontFamily: 'inherit'
          }}>
            Why Choose a Custom CRM for Your Business?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#cccccc',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'inherit'
          }}>
            See how a GoHighLevel CRM saves time, boosts leads, and streamlines operations
            compared to manual processes.
          </p>
        </div>

        <div ref={chartRef} style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          {/* Chart Title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '10px',
              fontFamily: 'inherit'
            }}>
              CRM Benefits for Tradies & Small Businesses
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: '#ff6b6b',
                  borderRadius: '3px'
                }}></div>
                <span style={{ color: '#cccccc', fontSize: '14px', fontFamily: 'inherit' }}>
                  Manual Processes
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: '#FFC107',
                  borderRadius: '3px'
                }}></div>
                <span style={{ color: '#cccccc', fontSize: '14px', fontFamily: 'inherit' }}>
                  Custom CRM (GoHighLevel)
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {chartData.map((data, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '20px',
                  fontFamily: 'inherit'
                }}>
                  {data.metric}
                </h4>
                
                {/* Chart Bars Container */}
                <div style={{
                  height: '200px',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  gap: '20px',
                  marginBottom: '15px'
                }}>
                  {/* Manual Process Bar */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#ff6b6b',
                      fontFamily: 'inherit'
                    }}>
                      {data.manual}{data.unit}
                    </span>
                    <div
                      ref={addToBarRefs}
                      style={{
                        width: '60px',
                        height: `${(data.manual / Math.max(data.manual, data.crm)) * 160}px`,
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)',
                        borderRadius: '8px 8px 4px 4px',
                        position: 'relative',
                        boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
                      }}
                    />
                  </div>

                  {/* CRM Bar */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#FFC107',
                      fontFamily: 'inherit'
                    }}>
                      {data.crm}{data.unit}
                    </span>
                    <div
                      ref={addToBarRefs}
                      style={{
                        width: '60px',
                        height: `${(data.crm / Math.max(data.manual, data.crm)) * 160}px`,
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '8px 8px 4px 4px',
                        position: 'relative',
                        boxShadow: '0 4px 12px rgba(255, 193, 7, 0.3)'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div style={{
            textAlign: 'center',
            padding: '30px 0',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: 'inherit'
            }}>
              <span style={{ color: '#FFC107' }}>Key Benefits:</span> Save 10–15 hours/week, increase conversions by up to 20%, and reduce missed leads to under 5% with Leads360's custom CRM solutions.
            </p>
            
            {/* CTA Button */}
            <div style={{ marginTop: '30px' }}>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                  color: '#1a1a1a',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 193, 7, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FFD54F 0%, #FFEB3B 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)';
                }}
              >
                Book a Free CRM Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle, rgba(255,107,107,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default CRMComparison;
