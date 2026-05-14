import React, { useState } from 'react';
import { Search, Menu, MessageCircle, Plus, Pin, ArrowLeft } from 'lucide-react';
import { siteData, categories, topics } from './data';
import './index.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const getCategoryColor = (catId) => {
    return categories.find(c => c.id === catId)?.color || '#ccc';
  };

  const getCategoryName = (catId) => {
    return categories.find(c => c.id === catId)?.name || '未知';
  };

  const filteredTopics = activeCategory === 'all' 
    ? topics 
    : topics.filter(t => t.categoryId === activeCategory);

  const selectedTopic = topics.find(t => t.id === selectedTopicId);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button className="icon-btn"><Menu size={20} /></button>
          <div className="logo">
            <div className="logo-icon"><MessageCircle size={18} /></div>
            {siteData.title}
          </div>
        </div>
        <div className="header-right">
          <button className="icon-btn"><Search size={20} /></button>
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Me" alt="User Avatar" className="avatar" />
        </div>
      </header>

      {/* Main Layout */}
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-title">类别</div>
            <ul className="sidebar-menu">
              {categories.map(cat => (
                <li 
                  key={cat.id}
                  className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat.id); setSelectedTopicId(null); }}
                >
                  {cat.id !== 'all' && (
                    <div className="category-dot" style={{ backgroundColor: cat.color }}></div>
                  )}
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-section">
            <div className="sidebar-title">热门标签</div>
            <ul className="sidebar-menu">
              <li className="sidebar-item">AI</li>
              <li className="sidebar-item">前端</li>
              <li className="sidebar-item">日常</li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {selectedTopicId ? (
            // Detail View
            <div className="detail-view">
              <button className="back-btn" onClick={() => setSelectedTopicId(null)}>
                <ArrowLeft size={16} /> 返回列表
              </button>
              
              <div className="detail-header">
                <h1 className="detail-title">{selectedTopic.title}</h1>
                <div className="detail-meta">
                  <div className="topic-category">
                    <div className="category-dot" style={{ backgroundColor: getCategoryColor(selectedTopic.categoryId) }}></div>
                    {getCategoryName(selectedTopic.categoryId)}
                  </div>
                  {selectedTopic.tags.map(tag => (
                    <span key={tag} className="topic-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="post">
                <div className="post-sidebar">
                  <img src={selectedTopic.author.avatar} alt={selectedTopic.author.name} className="post-avatar" />
                </div>
                <div className="post-content-wrap">
                  <div className="post-header">
                    <span className="post-author">{selectedTopic.author.name}</span>
                    <span className="post-time">{selectedTopic.lastActivity}</span>
                  </div>
                  <div className="post-body">
                    {selectedTopic.content}
                  </div>
                </div>
              </div>
              
              {/* Fake reply input */}
              <div className="post" style={{ opacity: 0.5 }}>
                <div className="post-sidebar">
                  <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Me" alt="Me" className="post-avatar" />
                </div>
                <div className="post-content-wrap">
                  <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px', color: '#888' }}>
                    回复 {selectedTopic.author.name}... (当前为静态展示，无法评论)
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Topic List View
            <>
              <div className="toolbar">
                <div className="tabs">
                  <button className="tab active">最新</button>
                  <button className="tab">热门</button>
                  <button className="tab">书签</button>
                </div>
                <button className="new-topic-btn">
                  <Plus size={16} /> 新建话题
                </button>
              </div>

              <div className="topic-list">
                <div className="topic-list-header">
                  <div>话题</div>
                  <div>回复者</div>
                  <div className="stat-num">回复</div>
                  <div className="stat-num">浏览量</div>
                  <div className="stat-num">活动</div>
                </div>
                
                {filteredTopics.map(topic => (
                  <div 
                    key={topic.id} 
                    className={`topic-item ${topic.isPinned ? 'pinned' : ''}`}
                    onClick={() => setSelectedTopicId(topic.id)}
                  >
                    <div className="topic-main">
                      <div className="topic-title">
                        {topic.isPinned && <Pin size={14} style={{ display: 'inline', marginRight: '5px', color: '#888' }} />}
                        {topic.title}
                      </div>
                      <div className="topic-meta">
                        <div className="topic-category">
                          <div className="category-dot" style={{ backgroundColor: getCategoryColor(topic.categoryId) }}></div>
                          {getCategoryName(topic.categoryId)}
                        </div>
                        {topic.tags.map(tag => (
                          <span key={tag} className="topic-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="participants">
                      {topic.participants.map((p, idx) => (
                        <img key={idx} src={p.avatar} alt={p.name} title={p.name} className="participant-avatar" />
                      ))}
                    </div>
                    
                    <div className="stat-num">{topic.replies}</div>
                    <div className="stat-num">{topic.views}</div>
                    <div className="stat-num">{topic.lastActivity}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
